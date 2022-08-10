import{_ as s,c as n,o as a,a as l}from"./app.1da6584b.js";const u=JSON.parse(`{"title":"Binary Indexed Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Intuition","slug":"intuition"},{"level":2,"title":"Implementation","slug":"implementation"},{"level":3,"title":"Storing Values","slug":"storing-values"},{"level":3,"title":"How to find which node is i's parent node?","slug":"how-to-find-which-node-is-i-s-parent-node"},{"level":2,"title":"Code","slug":"code"}],"relativePath":"advanced-algo/bit.md","lastUpdated":1660116845000}`),p={name:"advanced-algo/bit.md"},e=l(`<h1 id="binary-indexed-tree" tabindex="-1">Binary Indexed Tree <a class="header-anchor" href="#binary-indexed-tree" aria-hidden="true">#</a></h1><h2 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-hidden="true">#</a></h2><p>In some problem, we have to gain quick access to the accumulate sum of certain range of an Array and update multiple values in an Array. Keep that in mind, if we use <code>dynamic array</code>, access to <code>sum</code> would be at linear and <code>manipulate values</code> would be at constant time.</p><p>But in some problem, we want to access the sum in logarithmic time, that&#39;s when Binary Indexed Tree comes in mind. It enables accumulating sum in logarithmic time and increases the time of <code>add value to an existing value</code> values to logarithmic time.</p><p>Also, it&#39;s easy to code out.</p><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-hidden="true">#</a></h2><h3 id="storing-values" tabindex="-1">Storing Values <a class="header-anchor" href="#storing-values" aria-hidden="true">#</a></h3><p>Assumption: constuct binary indexed tree with vector <code>nums</code>.</p><p>So, basically, if let <code>node</code>&#39;s index is <code>i</code>, then it stored sum of values from <code>0 to i</code> at the same height or lower and your parent have to be the same.</p><blockquote><p>For example, <code>8</code> stores <code>sumOf(1 to 7)</code>, <code>15</code> stores <code>value of 15</code>, <code>6</code> stores <code>value of 5 + 6</code>.</p></blockquote><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> 0  </span></span>
<span class="line"><span style="color:#A6ACCD;">|  \\   \\      \\             \\</span></span>
<span class="line"><span style="color:#A6ACCD;">1   2   4      8             16 ... ,etc. (2^n)</span></span>
<span class="line"><span style="color:#A6ACCD;">    |   | \\    | \\  \\         | \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    3   5 6    9 10 12        ... ,etc. (2^n + 2^m)</span></span>
<span class="line"><span style="color:#A6ACCD;">          |      |   |  \\               // m &lt; n</span></span>
<span class="line"><span style="color:#A6ACCD;">          7      11  13 14</span></span>
<span class="line"><span style="color:#A6ACCD;">                        |</span></span>
<span class="line"><span style="color:#A6ACCD;">                        15</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="how-to-find-which-node-is-i-s-parent-node" tabindex="-1">How to find which node is i&#39;s parent node? <a class="header-anchor" href="#how-to-find-which-node-is-i-s-parent-node" aria-hidden="true">#</a></h3><p>get i&#39;s binary expression and filp its right most 1 to 0.</p><p>codewise:</p><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">-=</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">BIT</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">BIT</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">size </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 0 ~ position </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // equivalent to accumulate(data.begin(), data.begin() + position + 1, 0);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">accumulateVal</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;"> // O(log(n))</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> position</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            sum </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> sum</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // add value to nums[position]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add_to</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;"> // O(log(n))</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> position</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // return nums[position]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // suggesting creat a vector for storing value only</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">at</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;"> // O(log(n))</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">accumulateVal</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">accumulateVal</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">position </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SUM_ALL</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">accumulate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">()-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,17),o=[e];function t(c,r,i,F,y,D){return a(),n("div",null,o)}var m=s(p,[["render",t]]);export{u as __pageData,m as default};
