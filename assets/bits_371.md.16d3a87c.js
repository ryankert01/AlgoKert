import{_ as p,o as e,c as r,k as n,a as c,t as l,R as o}from"./chunks/framework.e352d743.js";const d=JSON.parse('{"title":"Sum of Two Integers","description":"leetcode 371. Sum of Two Integers","frontmatter":{"title":"Sum of Two Integers","editLink":true,"description":"leetcode 371. Sum of Two Integers"},"headers":[],"relativePath":"bits/371.md","filePath":"bits/371.md","lastUpdated":1727450630000}'),i={name:"bits/371.md"},t={id:"frontmatter-title",tabindex:"-1"},b={href:"https://leetcode.com/problems/sum-of-two-integers/",target:"_blank",rel:"noreferrer"};function C(a,s,A,u,m,y){return e(),r("div",null,[n("h1",t,[c(l(a.$frontmatter.title)+" ",1),s[0]||(s[0]=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),n("p",null,[n("a",b,l(a.$frontmatter.description),1)]),s[1]||(s[1]=o(`<h2 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-label="Permalink to &quot;Intuition&quot;">​</a></h2><p>We can simply use <code>a+b</code>, but in this problem, we cannot use <code>+</code> or <code>-</code>. So, we use bit manipulation to do it.</p><p>We use recursive to solve this problem.</p><p>We have <code>b == 0</code> as terminate point, and we call the function with <code>a^b</code> and <code>(a&amp;b)&lt;&lt;1</code>.</p><p>So, <code>a + b == newA + newB</code>, and <code>b</code> will reach 0 eventually, thus we find the answer.</p><h2 id="a-peek-of-the-code" tabindex="-1">A Peek of the code <a class="header-anchor" href="#a-peek-of-the-code" aria-label="Permalink to &quot;A Peek of the code&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSum</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,(</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)&lt;&lt;</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Runtime: 0 ms, faster than 100.00% of C++ online submissions for Sum of Two Integers.</strong></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p><strong>Will show a,b value&#39;s change in runtime.</strong></p><p>Example 1:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Input: a = 1, b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1 2  (a,b)</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000001 (bitwise a)</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000010 (bitwise b)</span></span>
<span class="line"><span style="color:#A6ACCD;">3 0</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000011</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Example 2:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Input: a = -1, b = -2</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: -3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-1 -2</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111111111</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111111110</span></span>
<span class="line"><span style="color:#A6ACCD;">1 -4</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000001</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111111100</span></span>
<span class="line"><span style="color:#A6ACCD;">-3 0</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111111101</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Example 3:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Input: a = -1000, b = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">Output: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-1000 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111110000011000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000001111101000</span></span>
<span class="line"><span style="color:#A6ACCD;">-16 16</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111110000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000010000</span></span>
<span class="line"><span style="color:#A6ACCD;">-32 32</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111100000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000100000</span></span>
<span class="line"><span style="color:#A6ACCD;">-64 64</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111111000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000001000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-128 128</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111110000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000010000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-256 256</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111100000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000100000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-512 512</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111111000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000001000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-1024 1024</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111110000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000010000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-2048 2048</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111100000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000100000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-4096 4096</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111111000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000001000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-8192 8192</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111110000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000010000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-16384 16384</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111100000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000100000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-32768 32768</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111111000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000001000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-65536 65536</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111110000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000010000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-131072 131072</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111100000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000100000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-262144 262144</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111111000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000001000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-524288 524288</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111110000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000010000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-1048576 1048576</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111100000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000100000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-2097152 2097152</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111111000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000001000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-4194304 4194304</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111110000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000010000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-8388608 8388608</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111100000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000100000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-16777216 16777216</span></span>
<span class="line"><span style="color:#A6ACCD;">11111111000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000001000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-33554432 33554432</span></span>
<span class="line"><span style="color:#A6ACCD;">11111110000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000010000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-67108864 67108864</span></span>
<span class="line"><span style="color:#A6ACCD;">11111100000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000100000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-134217728 134217728</span></span>
<span class="line"><span style="color:#A6ACCD;">11111000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00001000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-268435456 268435456</span></span>
<span class="line"><span style="color:#A6ACCD;">11110000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00010000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-536870912 536870912</span></span>
<span class="line"><span style="color:#A6ACCD;">11100000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00100000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-1073741824 1073741824</span></span>
<span class="line"><span style="color:#A6ACCD;">11000000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">01000000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">-2147483648 -2147483648</span></span>
<span class="line"><span style="color:#A6ACCD;">10000000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">10000000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">0 0</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000000</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000000000000000000000000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div>`,16))])}const h=p(i,[["render",C]]);export{d as __pageData,h as default};
