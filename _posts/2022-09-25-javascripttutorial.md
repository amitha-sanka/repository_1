---
keywords: fastai
description: JavaScript Tutorial
title: Jupyter JS Kernel
nb_path: _notebooks/2022-09-25-javascripttutorial.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-09-25-javascripttutorial.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;Hi&quot;</span><span class="p">);</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Hi
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">var</span> <span class="n">msg</span> <span class="o">=</span> <span class="s2">&quot;Hi&quot;</span><span class="p">;</span>
<span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">msg</span><span class="p">);</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Hi
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">function</span> <span class="n">logIt</span><span class="p">(</span><span class="n">output</span><span class="p">)</span> <span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">output</span><span class="p">);</span>
<span class="p">}</span>
<span class="n">logIt</span><span class="p">(</span><span class="n">msg</span><span class="p">);</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Hi
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;Reuse of logIT&quot;</span><span class="p">)</span>
<span class="n">logIt</span><span class="p">(</span><span class="s2">&quot;Hi&quot;</span><span class="p">);</span>
<span class="n">logIt</span><span class="p">(</span><span class="mi">2022</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Reuse of logIT
Hi
2022
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="n">function</span> <span class="n">logItType</span><span class="p">(</span><span class="n">output</span><span class="p">)</span> <span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">typeof</span> <span class="n">output</span><span class="p">,</span> <span class="s2">&quot;;&quot;</span><span class="p">,</span> <span class="n">output</span><span class="p">);</span>
<span class="p">}</span>
<span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;Functions in JavaScript&quot;</span><span class="p">)</span>
<span class="n">logItType</span><span class="p">(</span><span class="s2">&quot;hi&quot;</span><span class="p">);</span> <span class="o">//</span> <span class="n">String</span>
<span class="n">logItType</span><span class="p">(</span><span class="mi">2020</span><span class="p">);</span>    <span class="o">//</span> <span class="n">Number</span>
<span class="n">logItType</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]);</span>  <span class="o">//</span> <span class="n">Object</span> <span class="ow">is</span> <span class="n">generic</span> <span class="k">for</span> <span class="n">this</span> <span class="n">Array</span><span class="p">,</span> <span class="n">which</span> <span class="n">similar</span> <span class="n">to</span> <span class="n">Python</span> <span class="n">List</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Functions in JavaScript
string ; hi
number ; 2020
object ; [ 1, 2, 3 ]
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">function</span> <span class="n">to</span> <span class="n">hold</span> <span class="n">data</span> <span class="k">for</span> <span class="n">a</span> <span class="n">Person</span>
<span class="n">function</span> <span class="n">Person</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="n">sport</span><span class="p">,</span> <span class="n">age</span><span class="p">)</span> <span class="p">{</span>
  <span class="n">this</span><span class="o">.</span><span class="n">name</span> <span class="o">=</span> <span class="n">name</span><span class="p">;</span>
  <span class="n">this</span><span class="o">.</span><span class="n">sport</span> <span class="o">=</span> <span class="n">sport</span><span class="p">;</span>
  <span class="n">this</span><span class="o">.</span><span class="n">age</span> <span class="o">=</span> <span class="n">age</span><span class="p">;</span>
  <span class="n">this</span><span class="o">.</span><span class="n">role</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<span class="p">}</span>
<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">setter</span> <span class="k">for</span> <span class="n">role</span> <span class="ow">in</span> <span class="n">Person</span> <span class="n">data</span>
<span class="n">Person</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">setRole</span> <span class="o">=</span> <span class="n">function</span><span class="p">(</span><span class="n">role</span><span class="p">)</span> <span class="p">{</span>
  <span class="n">this</span><span class="o">.</span><span class="n">role</span> <span class="o">=</span> <span class="n">role</span><span class="p">;</span>
<span class="p">}</span>
<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">JSON</span> <span class="n">conversion</span> <span class="s2">&quot;method&quot;</span> <span class="n">associated</span> <span class="k">with</span> <span class="n">Person</span>
<span class="n">Person</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">toJSON</span> <span class="o">=</span> <span class="n">function</span><span class="p">()</span> <span class="p">{</span>
  <span class="n">const</span> <span class="n">obj</span> <span class="o">=</span> <span class="p">{</span><span class="n">name</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">name</span><span class="p">,</span> <span class="n">sport</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">sport</span><span class="p">,</span> <span class="n">age</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">age</span><span class="p">,</span> <span class="n">role</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">role</span><span class="p">};</span>
  <span class="n">const</span> <span class="n">json</span> <span class="o">=</span> <span class="n">JSON</span><span class="o">.</span><span class="n">stringify</span><span class="p">(</span><span class="n">obj</span><span class="p">);</span>
  <span class="k">return</span> <span class="n">json</span><span class="p">;</span>
<span class="p">}</span>
<span class="o">//</span> <span class="n">make</span> <span class="n">a</span> <span class="n">new</span> <span class="n">Person</span> <span class="ow">and</span> <span class="n">assign</span> <span class="n">to</span> <span class="n">variable</span> <span class="n">teacher</span>
<span class="n">var</span> <span class="n">teacher</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Ms Smith&quot;</span><span class="p">,</span> <span class="s2">&quot;tennis&quot;</span><span class="p">,</span> <span class="mi">32</span><span class="p">);</span>  <span class="o">//</span> <span class="nb">object</span> <span class="nb">type</span> <span class="ow">is</span> <span class="n">easy</span> <span class="n">to</span> <span class="n">work</span> <span class="k">with</span> <span class="ow">in</span> <span class="n">JavaScript</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">teacher</span><span class="p">);</span>  <span class="o">//</span> <span class="n">before</span> <span class="n">role</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">teacher</span><span class="o">.</span><span class="n">toJSON</span><span class="p">());</span>  <span class="o">//</span> <span class="n">ok</span> <span class="n">to</span> <span class="n">do</span> <span class="n">this</span> <span class="n">even</span> <span class="n">though</span> <span class="n">role</span> <span class="ow">is</span> <span class="ow">not</span> <span class="n">yet</span> <span class="n">defined</span>
<span class="o">//</span> <span class="n">output</span> <span class="n">of</span> <span class="n">Object</span> <span class="ow">and</span> <span class="n">JSON</span><span class="o">/</span><span class="n">string</span> <span class="n">associated</span> <span class="k">with</span> <span class="n">Teacher</span>
<span class="n">teacher</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Teacher&quot;</span><span class="p">);</span>   <span class="o">//</span> <span class="nb">set</span> <span class="n">the</span> <span class="n">role</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">teacher</span><span class="p">);</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">teacher</span><span class="o">.</span><span class="n">toJSON</span><span class="p">());</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>object ; Person { name: &#39;Ms Smith&#39;, sport: &#39;tennis&#39;, age: 32, role: &#39;&#39; }
string ; {&#34;name&#34;:&#34;Ms Smith&#34;,&#34;sport&#34;:&#34;tennis&#34;,&#34;age&#34;:32,&#34;role&#34;:&#34;&#34;}
object ; Person { name: &#39;Ms Smith&#39;, sport: &#39;tennis&#39;, age: 32, role: &#39;Teacher&#39; }
string ; {&#34;name&#34;:&#34;Ms Smith&#34;,&#34;sport&#34;:&#34;tennis&#34;,&#34;age&#34;:32,&#34;role&#34;:&#34;Teacher&#34;}
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">student</span> <span class="n">Array</span> <span class="n">of</span> <span class="n">Person</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>
<span class="n">var</span> <span class="n">students</span> <span class="o">=</span> <span class="p">[</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Tanisha&quot;</span><span class="p">,</span> <span class="s2">&quot;hockey&quot;</span><span class="p">,</span> <span class="mi">15</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Claire&quot;</span><span class="p">,</span> <span class="s2">&quot;hockey&quot;</span><span class="p">,</span> <span class="mi">15</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Amitha&quot;</span><span class="p">,</span> <span class="s2">&quot;track&quot;</span><span class="p">,</span> <span class="mi">16</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Grace&quot;</span><span class="p">,</span> <span class="s2">&quot;basketball&quot;</span><span class="p">,</span> <span class="mi">17</span><span class="p">),</span>
<span class="p">];</span>
<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">classroom</span> <span class="ow">and</span> <span class="n">build</span> <span class="n">Classroom</span> <span class="n">objects</span> <span class="ow">and</span> <span class="n">json</span>
<span class="n">function</span> <span class="n">Classroom</span><span class="p">(</span><span class="n">teacher</span><span class="p">,</span> <span class="n">students</span><span class="p">){</span> <span class="o">//</span> <span class="mi">1</span> <span class="n">teacher</span><span class="p">,</span> <span class="n">many</span> <span class="n">student</span>
    <span class="o">//</span> <span class="n">start</span> <span class="n">Classroom</span> <span class="k">with</span> <span class="n">Teacher</span>
    <span class="n">teacher</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Teacher&quot;</span><span class="p">);</span>
    <span class="n">this</span><span class="o">.</span><span class="n">teacher</span> <span class="o">=</span> <span class="n">teacher</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">classroom</span> <span class="o">=</span> <span class="p">[</span><span class="n">teacher</span><span class="p">];</span>
    <span class="o">//</span> <span class="n">add</span> <span class="n">each</span> <span class="n">Student</span> <span class="n">to</span> <span class="n">Classroom</span>
    <span class="n">this</span><span class="o">.</span><span class="n">students</span> <span class="o">=</span> <span class="n">students</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">students</span><span class="o">.</span><span class="n">forEach</span><span class="p">(</span><span class="n">student</span> <span class="o">=&gt;</span> <span class="p">{</span> <span class="n">student</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Student&quot;</span><span class="p">);</span> <span class="n">this</span><span class="o">.</span><span class="n">classroom</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">student</span><span class="p">);</span> <span class="p">});</span>
    <span class="o">//</span> <span class="n">build</span> <span class="n">json</span><span class="o">/</span><span class="n">string</span> <span class="nb">format</span> <span class="n">of</span> <span class="n">Classroom</span>
    <span class="n">this</span><span class="o">.</span><span class="n">json</span> <span class="o">=</span> <span class="p">[];</span>
    <span class="n">this</span><span class="o">.</span><span class="n">classroom</span><span class="o">.</span><span class="n">forEach</span><span class="p">(</span><span class="n">person</span> <span class="o">=&gt;</span> <span class="n">this</span><span class="o">.</span><span class="n">json</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">person</span><span class="o">.</span><span class="n">toJSON</span><span class="p">()));</span>
<span class="p">}</span>
<span class="o">//</span> <span class="n">make</span> <span class="n">a</span> <span class="n">CompSci</span> <span class="n">classroom</span> <span class="kn">from</span> <span class="nn">formerly</span> <span class="n">defined</span> <span class="n">teacher</span> <span class="ow">and</span> <span class="n">students</span>
<span class="n">compsci</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Classroom</span><span class="p">(</span><span class="n">teacher</span><span class="p">,</span> <span class="n">students</span><span class="p">);</span>
<span class="o">//</span> <span class="n">output</span> <span class="n">of</span> <span class="n">Objects</span> <span class="ow">and</span> <span class="n">JSON</span> <span class="ow">in</span> <span class="n">CompSci</span> <span class="n">classroom</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span><span class="p">);</span>  <span class="o">//</span> <span class="n">constructed</span> <span class="n">classroom</span> <span class="nb">object</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">name</span><span class="p">);</span>  <span class="o">//</span> <span class="n">abstract</span> <span class="mi">1</span><span class="n">st</span> <span class="n">objects</span> <span class="n">name</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">json</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>  <span class="o">//</span> <span class="n">show</span> <span class="n">json</span> <span class="n">conversion</span> <span class="n">of</span> <span class="mi">1</span><span class="n">st</span> <span class="nb">object</span> <span class="n">to</span> <span class="n">string</span>
<span class="n">logItType</span><span class="p">(</span><span class="n">JSON</span><span class="o">.</span><span class="n">parse</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">json</span><span class="p">[</span><span class="mi">0</span><span class="p">]));</span>  <span class="o">//</span> <span class="n">show</span> <span class="n">JSON</span><span class="o">.</span><span class="n">parse</span> <span class="n">inverse</span> <span class="n">of</span> <span class="n">JSON</span><span class="o">.</span><span class="n">stringify</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>object ; [ Person { name: &#39;Ms Smith&#39;, sport: &#39;tennis&#39;, age: 32, role: &#39;Teacher&#39; },
  Person { name: &#39;Tanisha&#39;, sport: &#39;hockey&#39;, age: 15, role: &#39;Student&#39; },
  Person { name: &#39;Claire&#39;, sport: &#39;hockey&#39;, age: 15, role: &#39;Student&#39; },
  Person { name: &#39;Amitha&#39;, sport: &#39;track&#39;, age: 16, role: &#39;Student&#39; },
  Person { name: &#39;Grace&#39;, sport: &#39;basketball&#39;, age: 17, role: &#39;Student&#39; } ]
string ; Ms Smith
string ; {&#34;name&#34;:&#34;Ms Smith&#34;,&#34;sport&#34;:&#34;tennis&#34;,&#34;age&#34;:32,&#34;role&#34;:&#34;Teacher&#34;}
object ; { name: &#39;Ms Smith&#39;, sport: &#39;tennis&#39;, age: 32, role: &#39;Teacher&#39; }
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">define</span> <span class="n">an</span> <span class="n">HTML</span> <span class="n">conversion</span> <span class="s2">&quot;method&quot;</span> <span class="n">associated</span> <span class="k">with</span> <span class="n">Classroom</span>
<span class="n">Classroom</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">_toHtml</span> <span class="o">=</span> <span class="n">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">HTML</span> <span class="n">Style</span> <span class="ow">is</span> <span class="n">build</span> <span class="n">using</span> <span class="n">inline</span> <span class="n">structure</span>
    <span class="n">var</span> <span class="n">style</span> <span class="o">=</span> <span class="p">(</span>
      <span class="s2">&quot;display:inline-block;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;border: 2px solid grey;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;box-shadow: 0.8em 0.4em 0.4em grey;&quot;</span>
    <span class="p">);</span>
    <span class="o">//</span> <span class="n">HTML</span> <span class="n">Body</span> <span class="n">of</span> <span class="n">Table</span> <span class="ow">is</span> <span class="n">build</span> <span class="k">as</span> <span class="n">a</span> <span class="n">series</span> <span class="n">of</span> <span class="n">concatenations</span> <span class="p">(</span><span class="o">+=</span><span class="p">)</span>
    <span class="n">var</span> <span class="n">body</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
    <span class="o">//</span> <span class="n">Heading</span> <span class="k">for</span> <span class="n">Array</span> <span class="n">Columns</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Name&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Sport&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Age&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Role&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;/tr&gt;&quot;</span><span class="p">;</span>
    <span class="o">//</span> <span class="n">Data</span> <span class="n">of</span> <span class="n">Array</span><span class="p">,</span> <span class="n">iterate</span> <span class="n">through</span> <span class="n">each</span> <span class="n">row</span> <span class="n">of</span> <span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span>
    <span class="k">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">row</span> <span class="n">of</span> <span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span><span class="p">)</span> <span class="p">{</span>
      <span class="o">//</span> <span class="n">tr</span> <span class="k">for</span> <span class="n">each</span> <span class="n">row</span><span class="p">,</span> <span class="n">a</span> <span class="n">new</span> <span class="n">line</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
      <span class="o">//</span> <span class="n">td</span> <span class="k">for</span> <span class="n">each</span> <span class="n">column</span> <span class="n">of</span> <span class="n">data</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">name</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">sport</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">age</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">role</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="o">//</span> <span class="n">tr</span> <span class="n">to</span> <span class="n">end</span> <span class="n">line</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
    <span class="p">}</span>
     <span class="o">//</span> <span class="n">Build</span> <span class="ow">and</span> <span class="n">HTML</span> <span class="n">fragment</span> <span class="n">of</span> <span class="n">div</span><span class="p">,</span> <span class="n">table</span><span class="p">,</span> <span class="n">table</span> <span class="n">body</span>
    <span class="k">return</span> <span class="p">(</span>
      <span class="s2">&quot;&lt;div style=&#39;&quot;</span> <span class="o">+</span> <span class="n">style</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;&quot;</span> <span class="o">+</span>
        <span class="s2">&quot;&lt;table&gt;&quot;</span> <span class="o">+</span>
          <span class="n">body</span> <span class="o">+</span>
        <span class="s2">&quot;&lt;/table&gt;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;&lt;/div&gt;&quot;</span>
    <span class="p">);</span>
  <span class="p">};</span>
  <span class="o">//</span> <span class="n">IJavaScript</span> <span class="n">HTML</span> <span class="n">processor</span> <span class="n">receive</span> <span class="n">parameter</span> <span class="n">of</span> <span class="n">defined</span> <span class="n">HTML</span> <span class="n">fragment</span>
  <span class="err">$$</span><span class="o">.</span><span class="n">html</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">_toHtml</span><span class="p">());</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">


<div class="output_html rendered_html output_subarea output_execute_result">
<div style='display:inline-block;border: 2px solid grey;box-shadow: 0.8em 0.4em 0.4em grey;'><table><tr><th><mark>Name</mark></th><th><mark>Sport</mark></th><th><mark>Age</mark></th><th><mark>Role</mark></th></tr><tr><td>Ms Smith</td><td>tennis</td><td>32</td><td>Teacher</td><tr><tr><td>Tanisha</td><td>hockey</td><td>15</td><td>Student</td><tr><tr><td>Claire</td><td>hockey</td><td>15</td><td>Student</td><tr><tr><td>Amitha</td><td>track</td><td>16</td><td>Student</td><tr><tr><td>Grace</td><td>basketball</td><td>17</td><td>Student</td><tr></table></div>
</div>

</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 

