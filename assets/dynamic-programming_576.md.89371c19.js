import{_ as s,o as n,c as a,U as l}from"./chunks/framework.ec5cf475.js";const i=JSON.parse('{"title":"Out of Boundary Paths","description":"","frontmatter":{},"headers":[],"relativePath":"dynamic-programming/576.md","filePath":"dynamic-programming/576.md","lastUpdated":1703943364000}'),p={name:"dynamic-programming/576.md"},o=l(`<h1 id="out-of-boundary-paths" tabindex="-1">Out of Boundary Paths <a class="header-anchor" href="#out-of-boundary-paths" aria-label="Permalink to &quot;Out of Boundary Paths&quot;">​</a></h1><p><a href="https://leetcode.com/problems/out-of-boundary-paths/" target="_blank" rel="noreferrer">576. Out of Boundary Paths</a></p><h2 id="dp-top-down-approach" tabindex="-1">DP Top-down Approach <a class="header-anchor" href="#dp-top-down-approach" aria-label="Permalink to &quot;DP Top-down Approach&quot;">​</a></h2><h3 id="intuition" tabindex="-1">Intuition : <a class="header-anchor" href="#intuition" aria-label="Permalink to &quot;Intuition :&quot;">​</a></h3><p>First, we discover that there&#39;s four direction a point can go, check if it out of bound, if out-of-bound, it is a path we just find. Therefore, use dfs on it. Okay, but it will TLE without cache, so we use memoization to cache already computed value. Therefore, next time we encounter same <code>i,j,cntMove</code>, we only need to read <code>dp[i][j][cntMove]</code>, for example.</p><h3 id="code" tabindex="-1">Code : <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code :&quot;">​</a></h3><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> dir</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> mod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1e9</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findPaths</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">maxMove</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startRow</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startColumn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> m</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;&gt;(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">maxMove</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dfs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">startRow</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">startColumn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">maxMove</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dfs</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">i</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">j</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">maxMove</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cntMove</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">dp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cntMove </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> maxMove</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">cntMove</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">cntMove</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> cntRes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> m </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            cntRes</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#F07178;">            cntRes </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dfs</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">m</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> maxMove</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> cntMove</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> dp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        cntRes </span><span style="color:#89DDFF;">%=</span><span style="color:#F07178;"> mod</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">cntMove</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cntRes </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> mod</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="complexity-analysis" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis" aria-label="Permalink to &quot;Complexity Analysis&quot;">​</a></h3><p>Time : <code>O(m*n*MaxMove)</code></p><p>Space : <code>O(m*n*maxMove)</code></p><h2 id="dp-buttom-up-approach" tabindex="-1">DP Buttom-up Approach <a class="header-anchor" href="#dp-buttom-up-approach" aria-label="Permalink to &quot;DP Buttom-up Approach&quot;">​</a></h2><h3 id="intuition-1" tabindex="-1">Intuition : <a class="header-anchor" href="#intuition-1" aria-label="Permalink to &quot;Intuition :&quot;">​</a></h3><p>We use dp matrix where <code>dp[i][j][M]</code> denotes the number of ways to reach the cell <code>(i, j)</code> from outside grid in atmost <code>M</code> moves.</p><p>Start from outside, we add them step by step, until reach maxMove.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 12</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">0,0,0 =&gt; 3,2,3 =&gt; 5,8,5 =&gt; 11,12,11</span></span>
<span class="line"><span style="color:#A6ACCD;">(add 4 direction value, if outOfBound add 1)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Therefore at <code>dp[startRow][startColumn][maxMove]</code> we find 12.</p><h3 id="code-1" tabindex="-1">Code : <a class="header-anchor" href="#code-1" aria-label="Permalink to &quot;Code :&quot;">​</a></h3><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> dir</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> mod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1e9</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">findPaths</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">maxMove</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startRow</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">startColumn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">auto</span><span style="color:#A6ACCD;"> outOfBound </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[&amp;](</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">m</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">r</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">51</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">51</span><span style="color:#89DDFF;">][</span><span style="color:#F78C6C;">51</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> maxMove</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> M</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> m</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">++)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> d</span><span style="color:#89DDFF;">++)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">outOfBound</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">m</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]))</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">M</span><span style="color:#89DDFF;">]++;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">M</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">]][</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]][</span><span style="color:#F07178;">M</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">M</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%=</span><span style="color:#F07178;"> mod</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">startRow</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">startColumn</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">maxMove</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="complexity-analysis-1" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis-1" aria-label="Permalink to &quot;Complexity Analysis&quot;">​</a></h3><p>Time : <code>O(m*n*MaxMove)</code></p><p>Space : <code>O(m*n*maxMove)</code></p>`,21),e=[o];function t(r,c,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};