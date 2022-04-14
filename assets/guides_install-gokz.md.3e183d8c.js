import{_ as e,c as o,o as t,a as l}from"./app.afcf25af.js";const f='{"title":"Install GOKZ","description":"Installation guide for GOKZ","frontmatter":{"title":"Install GOKZ","description":"Installation guide for GOKZ"},"headers":[{"level":2,"title":"Before you begin","slug":"before-you-begin"},{"level":2,"title":"1. Installing Metamod:Source","slug":"_1-installing-metamod-source"},{"level":2,"title":"2. Installing SourceMod","slug":"_2-installing-sourcemod"},{"level":2,"title":"3. Installing DHooks","slug":"_3-installing-dhooks"},{"level":2,"title":"4. Installing MovementAPI","slug":"_4-installing-movementapi"},{"level":2,"title":"5. Installing GOKZ","slug":"_5-installing-gokz"},{"level":2,"title":"6. GOKZ is installed","slug":"_6-gokz-is-installed"},{"level":2,"title":"7. Useful plugins (optional)","slug":"_7-useful-plugins-optional"},{"level":2,"title":"8. Apply for Global Whitelist (optional)","slug":"_8-apply-for-global-whitelist-optional"}],"relativePath":"guides/install-gokz.md","lastUpdated":1649917549000}',s={},i=l(`<h1 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h1><blockquote><p><div class="table-of-contents"><ul><li><a href="#before-you-begin">Before you begin</a></li><li><a href="#_1-installing-metamod-source">1. Installing Metamod:Source</a></li><li><a href="#_2-installing-sourcemod">2. Installing SourceMod</a></li><li><a href="#_3-installing-dhooks">3. Installing DHooks</a></li><li><a href="#_4-installing-movementapi">4. Installing MovementAPI</a></li><li><a href="#_5-installing-gokz">5. Installing GOKZ</a></li><li><a href="#_6-gokz-is-installed">6. GOKZ is installed</a></li><li><a href="#_7-useful-plugins-optional">7. Useful plugins (optional)</a></li><li><a href="#_8-apply-for-global-whitelist-optional">8. Apply for Global Whitelist (optional)</a></li></ul></div></p></blockquote><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-hidden="true">#</a></h2><ol><li>This guide assumes that you have a working CS:GO server.</li><li>This guide assumes that you have access to the server files.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are asked to overwrite files at any point in the guide, accept the overwrites.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are having trouble with a step, try the <strong>#support</strong> channel in <a href="https://discord.gg/csgokz" target="_blank" rel="noopener noreferrer">our Discord server</a>. <br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from <code>csgo/addons/sourcemod/logs/errors_********.log</code>.</p></div><h2 id="_1-installing-metamod-source" tabindex="-1">1. Installing Metamod:Source <a class="header-anchor" href="#_1-installing-metamod-source" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading <a href="https://www.sourcemm.net/downloads.php?branch=stable" target="_blank" rel="noopener noreferrer">Metamod:Source</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have Metamod:Source installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>meta version</code> in the server console. <br>You should see the following line in the output: <code>Loaded As: Valve Server Plugin</code>.</p></div><h2 id="_2-installing-sourcemod" tabindex="-1">2. Installing SourceMod <a class="header-anchor" href="#_2-installing-sourcemod" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading <a href="https://sourcemod.net/downloads.php?branch=stable" target="_blank" rel="noopener noreferrer">SourceMod</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have SourceMod installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>sm version</code> in the server console. <br>You should see the following line in the output: <code>SourceMod Version Information</code>.</p></div><h2 id="_3-installing-dhooks" tabindex="-1">3. Installing DHooks <a class="header-anchor" href="#_3-installing-dhooks" aria-hidden="true">#</a></h2><ol><li>Start by downloading <a href="https://forums.alliedmods.net/showpost.php?p=2588686&amp;postcount=589" target="_blank" rel="noopener noreferrer">DHooks</a>, the downloads can be found at the bottom of the post.</li></ol><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>Be sure to download the <code>sm110</code> version.</p></div><ol start="2"><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have DHooks installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>sm exts list</code> in the server console. <br>You should see the following line in the output: <code>DHooks (2.2.0-detours17)</code>.</p></div><h2 id="_4-installing-movementapi" tabindex="-1">4. Installing MovementAPI <a class="header-anchor" href="#_4-installing-movementapi" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading the latest release of <a href="https://github.com/danzayau/MovementAPI/releases" target="_blank" rel="noopener noreferrer">MovementAPI</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have MovementAPI installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>sm plugins list</code> in the server console. <br>You should see the following line in the output: <code>MovementAPI (2.2.0)</code>.</p></div><h2 id="_5-installing-gokz" tabindex="-1">5. Installing GOKZ <a class="header-anchor" href="#_5-installing-gokz" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading the latest <strong>non-upgrade</strong> release of <a href="https://github.com/KZGlobalTeam/gokz/releases" target="_blank" rel="noopener noreferrer">GOKZ</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>Open <code>csgo/addons/sourcemod/configs/databases.cfg</code> in a text editor and add the following lines:</p></li></ol><div class="language-json"><pre><code>    <span class="token string">&quot;gokz&quot;</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;driver&quot;</span>    <span class="token string">&quot;sqlite&quot;</span>
        <span class="token string">&quot;database&quot;</span>  <span class="token string">&quot;gokz-sqlite&quot;</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>Make sure to paste this BEFORE the last existing <code>}</code> character in the file.</p></div><ol start="4"><li>You should now have GOKZ installed and working.</li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>sm plugins list</code> in the server console. <br>You should see the following line in the output: <code>GOKZ-Core (3.2.0)</code>.</p></div><h2 id="_6-gokz-is-installed" tabindex="-1">6. GOKZ is installed <a class="header-anchor" href="#_6-gokz-is-installed" aria-hidden="true">#</a></h2><p>You&#39;ve finished installing GOKZ, the next steps are not required for a functional GOKZ server.</p><h2 id="_7-useful-plugins-optional" tabindex="-1">7. Useful plugins (optional) <a class="header-anchor" href="#_7-useful-plugins-optional" aria-hidden="true">#</a></h2><p>Install other useful plugins from the <a href="https://forum.gokz.org/p/15-guide-plugins" target="_blank" rel="noopener noreferrer">Useful Plugins for KZ Server Owners</a> guide.</p><h2 id="_8-apply-for-global-whitelist-optional" tabindex="-1">8. Apply for Global Whitelist (optional) <a class="header-anchor" href="#_8-apply-for-global-whitelist-optional" aria-hidden="true">#</a></h2><p>Follow the <a href="https://forum.gokz.org/p/guide-whitelist" target="_blank" rel="noopener noreferrer">How to Get Your Server Whitelisted</a> guide to get your server whitelisted.</p>`,32),a=[i];function n(r,d,c,p,u,h){return t(),o("div",null,a)}var m=e(s,[["render",n]]);export{f as __pageData,m as default};
