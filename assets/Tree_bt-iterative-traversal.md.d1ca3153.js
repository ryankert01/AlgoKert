import{_ as a,o as l,c as p,k as s,a as o,t as e,U as t}from"./chunks/framework.f31b4cfb.js";const m=JSON.parse('{"title":"Binary Tree Interative Traversal","description":"leetcode Preorder Inorder Postorder","frontmatter":{"title":"Binary Tree Interative Traversal","editLink":true,"description":"leetcode Preorder Inorder Postorder"},"headers":[],"relativePath":"Tree/bt-iterative-traversal.md","filePath":"Tree/bt-iterative-traversal.md","lastUpdated":1693837762000}'),r={name:"Tree/bt-iterative-traversal.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),F=t(`<h2 id="preorder-traversal" tabindex="-1">Preorder Traversal <a class="header-anchor" href="#preorder-traversal" aria-label="Permalink to &quot;Preorder Traversal&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#C792EA;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">*&gt;</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		TreeNode</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="inorder-traversal" tabindex="-1">Inorder Traversal <a class="header-anchor" href="#inorder-traversal" aria-label="Permalink to &quot;Inorder Traversal&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">inorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#C792EA;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">*&gt;</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">			root </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		root </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		root </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="postorder-traversal" tabindex="-1">Postorder Traversal <a class="header-anchor" href="#postorder-traversal" aria-label="Permalink to &quot;Postorder Traversal&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">postorderTraversal</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#C792EA;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">	stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">TreeNode</span><span style="color:#89DDFF;">*&gt;</span><span style="color:#A6ACCD;"> s1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		TreeNode</span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#89DDFF;">(!</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">top</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">s2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,6);function y(n,A,i,C,b,u){return l(),p("div",null,[s("h1",c,[o(e(n.$frontmatter.title)+" ",1),D]),F])}const h=a(r,[["render",y]]);export{m as __pageData,h as default};