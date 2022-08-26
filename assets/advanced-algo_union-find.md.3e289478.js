import{_ as l,o as p,c as o,b as s,d as e,t as a,a as r}from"./app.090b1d58.js";const h=JSON.parse('{"title":"Union Find","description":"leetcode 2382. Maximum Segment Sum After Removals","frontmatter":{"title":"Union Find","editLink":true,"description":"leetcode 2382. Maximum Segment Sum After Removals","problem_url":"https://leetcode.com/problems/maximum-segment-sum-after-removals/"},"headers":[{"level":2,"title":"Intuition","slug":"intuition","link":"#intuition","children":[{"level":3,"title":"Union find Operations:","slug":"union-find-operations","link":"#union-find-operations","children":[]},{"level":3,"title":"Explanations:","slug":"explanations","link":"#explanations","children":[]}]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Complexity Analysis","slug":"complexity-analysis","link":"#complexity-analysis","children":[]},{"level":2,"title":"Another Solution","slug":"another-solution","link":"#another-solution","children":[{"level":3,"title":"Prefix Sum + Map + Priority Queue","slug":"prefix-sum-map-priority-queue","link":"#prefix-sum-map-priority-queue","children":[]},{"level":3,"title":"Code","slug":"code-1","link":"#code-1","children":[]},{"level":3,"title":"Complexity Analysis","slug":"complexity-analysis-1","link":"#complexity-analysis-1","children":[]}]}],"relativePath":"advanced-algo/union-find.md","lastUpdated":1661537223000}'),t={name:"advanced-algo/union-find.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D={href:"{{ $frontmatter.problem_url }}",target:"_blank",rel:"noopener noreferrer"},y=r(`<h2 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-hidden="true">#</a></h2><h3 id="union-find-operations" tabindex="-1">Union find Operations: <a class="header-anchor" href="#union-find-operations" aria-hidden="true">#</a></h3><ol><li>find: find where its value is stored (<code>log(n)</code>)</li><li>merge: merge neighboring groups (<code>log(n)</code>)</li></ol><h3 id="explanations" tabindex="-1">Explanations: <a class="header-anchor" href="#explanations" aria-hidden="true">#</a></h3><p>In this problem, because all <code>nums</code> will eventually be removed, we reverse the operations that this problem provide, so that we can use Union-Find.</p><p>So, we can start from no segments, add elements in the reverse (of the removal) order, and create/merge segments.</p><ol><li>initialize <code>ds</code> array with <code>INT_MAX</code>, we will store <code>nums</code> value in <code>-nums</code> (nagative), and store index value <code>&gt;= 0</code> (positive).</li><li>insert per <code>i in removeQueries</code>, if there&#39;s already values besides it, join/merge it.</li></ol><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ll</span><span style="color:#A6ACCD;"> long long</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ll</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;"> // log(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ll</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;"> // contains find() // log(n)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> p2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">p2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    ds</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">p1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> p2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maximumSegmentSum</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">rq</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ll</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">res</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ds</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> INT_MAX</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;"> // n*log(n)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rq</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">j </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> INT_MAX</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> ds</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> INT_MAX</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">merge</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> ds</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ds</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> ds</span><span style="color:#89DDFF;">)]);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="complexity-analysis" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis" aria-hidden="true">#</a></h2><p><strong>Time:</strong> <code>O(n*log(n))</code></p><p><strong>Space:</strong> <code>O(n)</code></p><h2 id="another-solution" tabindex="-1">Another Solution <a class="header-anchor" href="#another-solution" aria-hidden="true">#</a></h2><h3 id="prefix-sum-map-priority-queue" tabindex="-1">Prefix Sum + Map + Priority Queue <a class="header-anchor" href="#prefix-sum-map-priority-queue" aria-hidden="true">#</a></h3><p><strong>Intuition:</strong></p><p>Firstly, Create a vector dp contains <code>dp[i] = nums[0] + ... + nums[i-1]</code>, so we can use <code>dp[j+1] - dp[i]</code> to find range sum in constant time.</p><p>We use map to mark every range that haven&#39;t been removed for every element, and update it in every <code>removeQueries</code>.</p><p>Hence, we use <code>priority_queue</code> to find the maximum, since we have already updated range in <code>map</code>, if we encounters those with different range with current range, discard that.</p><h3 id="code-1" tabindex="-1">Code <a class="header-anchor" href="#code-1" aria-hidden="true">#</a></h3><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ll</span><span style="color:#A6ACCD;"> long long</span></span>
<span class="line"><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maximumSegmentSum</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ll</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	ll acc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span></span>
<span class="line"><span style="color:#A6ACCD;">		dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> acc </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ll</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ran</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	priority_queue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ll</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> pq</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">{dp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	ran</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#C792EA;">auto</span><span style="color:#F07178;"> it </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">upper_bound</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">())</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">{</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#F07178;">}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">first</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">erase</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">rmQueries</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">{</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">first</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">first</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">second</span><span style="color:#F07178;">}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">while</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ran</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]]))</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pq</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="complexity-analysis-1" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis-1" aria-hidden="true">#</a></h3><p><strong>Time:</strong> <code>O(n*log(n))</code></p><p><strong>Space:</strong> <code>O(n)</code></p>`,23);function A(n,C,i,d,u,m){return p(),o("div",null,[s("h1",c,[e(a(n.$frontmatter.title)+" ",1),F]),s("p",null,[s("a",D,a(n.$frontmatter.description),1)]),y])}const g=l(t,[["render",A]]);export{h as __pageData,g as default};