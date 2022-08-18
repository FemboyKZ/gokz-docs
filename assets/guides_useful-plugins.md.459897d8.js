import{d as _,b,o,c as s,r as p,u as f,F as m,e,t as a,f as r,_ as y,g as i,a as w}from"./app.382d55ed.js";const v=JSON.parse('{"recommended":[{"name":"MapCrashFixer","author":"Bot Benson","download":"https://forums.alliedmods.net/showthread.php?t=310542","description":"Mostly fixes the issue where players experience their game crashing on map changes"}],"hud":[{"name":"MovementHUD","author":"Sikari","download":"https://github.com/Sikarii/MovementHUD","description":"A versatile SourceMod plugin providing customizable displays for player movement"},{"name":"GOKZ Scoreboard Timer","author":"Ruto","download":"https://github.com/DevRuto/GOKZ-Scoreboard-Timer","description":"Shows time in kills, checkpoints in assists, and teleports in deaths column in the scoreboard","tags":["GOKZ only","In KZTimer"]},{"name":"ShowPos","author":"zer0k_z","download":"https://github.com/zer0k-z/showpos","description":"Shows origin, angles and velocity in hint text along with options for customization"}],"statistics":[{"name":"Distbug","author":"GameChaos","download":"https://bitbucket.org/GameChaos/distbug","description":"Gives you more details on your jumpstats as well as stats on failed jumps"},{"name":"GlobalPB","author":"Szwagi","download":"https://github.com/szwagi/globalpb","description":"Lets players see their global personal best","tags":["In GOKZ"]},{"name":"More Stats","author":"Szwagi, zer0k_z","download":"https://github.com/zer0k-z/more-stats","description":"Displays statistics about your bhops"}],"miscellaneous":[{"name":"GOKZ Discord","author":"zer0k_z","download":"https://github.com/zer0k-z/gokz-discord","description":"Posts GOKZ server records to a Discord channel using webhooks","tags":["GOKZ only"]},{"name":"LJ Room Teleport","author":"Evan","download":"https://github.com/EvanIMK/KZ-LJ-Teleport","description":"Allows your players to teleport directly to the longjump room"},{"name":"Zone Stopwatch","author":"GameChaos","download":"https://bitbucket.org/GameChaos/zone-stopwatch","description":"Lets players create zones to check how fast different routes are"},{"name":"GCMeasure","author":"GameChaos","download":"https://bitbucket.org/GameChaos/gcmeasure","description":"Enables players to measure distances between gaps as well as height differences","tags":["In GOKZ"]},{"name":"Player Model Changer","author":"GameChaos","download":"https://bitbucket.org/GameChaos/player-model-changer","description":"Allows you to use different player models"},{"name":"Ruto Recorder","author":"Ruto","download":"https://github.com/DevRuto/KZTimerRecorder","description":"Allows you to save GOKZ server record replays on your KZTimer server","tags":["KZTimer only"]},{"name":"CSGO Particle Auto Precacher","author":"Copypaste Slim, zer0k_z","download":"https://bitbucket.org/zer0k_z/csgo-particle-auto-precacher","description":"Allows players to see custom particles on certain maps like bkz_apricity_v2 and others","tags":["In KZTimer"]},{"name":"KZTierMapchooser","author":"Kidev","download":"https://forum.gokz.org/d/657-plugin-kztiermapchooser-map-tiers-displayed-in-votemap","description":"A mapchooser that displays tiers next to maps in map votes"},{"name":"No More Sounds","author":"Szwagi","download":"https://github.com/Szwagi/no-more-sounds","description":"Allows players to mute map music, gunshot sounds, footsteps and volume of checkpoint/teleport"}]}'),k=["href"],z=r(" by "),S={class:"plugin-author"},G={class:"plugin-description"},K=_({__name:"Plugins",props:{category:null},setup(u){const d=u,h=b(()=>{var c;return((c=v[d.category])!=null?c:[]).sort((t,n)=>t.name.localeCompare(n.name))});return(g,c)=>(o(!0),s(m,null,p(f(h),t=>(o(),s("div",{key:t.name,class:"plugin-container"},[e("a",{href:t.download,class:"plugin-name",target:"_blank",rel:"noopener noreferrer"},a(t.name),9,k),z,e("span",S,a(t.author),1),(o(!0),s(m,null,p(t.tags,n=>(o(),s("span",{key:n,class:"plugin-badge"},a(n),1))),128)),e("div",G,a(t.description),1)]))),128))}});const l=y(K,[["__scopeId","data-v-da68d4cf"]]),Z={id:"frontmatter-title",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),C=w('<p>This guide consists of useful plugins for KZ server owners.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>All these plugins are third-party and are without warranty from us.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are having trouble with a plugin, try the <strong>#support</strong> channel in <a href="https://discord.gg/csgokz" target="_blank" rel="noreferrer">our Discord server</a>. <br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from <code>csgo/addons/sourcemod/logs/errors_********.log</code>.</p></div><h2 id="strongly-recommended" tabindex="-1">Strongly recommended <a class="header-anchor" href="#strongly-recommended" aria-hidden="true">#</a></h2>',4),x=e("h2",{id:"hud",tabindex:"-1"},[r("HUD "),e("a",{class:"header-anchor",href:"#hud","aria-hidden":"true"},"#")],-1),D=e("h2",{id:"statistics",tabindex:"-1"},[r("Statistics "),e("a",{class:"header-anchor",href:"#statistics","aria-hidden":"true"},"#")],-1),A=e("h2",{id:"miscellaneous",tabindex:"-1"},[r("Miscellaneous "),e("a",{class:"header-anchor",href:"#miscellaneous","aria-hidden":"true"},"#")],-1),P=JSON.parse('{"title":"Useful plugins guide","description":"Useful plugins for KZ server owners","frontmatter":{"title":"Useful plugins guide","description":"Useful plugins for KZ server owners"},"headers":[{"level":2,"title":"Strongly recommended","slug":"strongly-recommended"},{"level":2,"title":"HUD","slug":"hud"},{"level":2,"title":"Statistics","slug":"statistics"},{"level":2,"title":"Miscellaneous","slug":"miscellaneous"}],"relativePath":"guides/useful-plugins.md"}'),M={name:"guides/useful-plugins.md"},N=Object.assign(M,{setup(u){return(d,h)=>(o(),s("div",null,[e("h1",Z,[r(a(d.$frontmatter.title)+" ",1),T]),C,i(l,{category:"recommended"}),x,i(l,{category:"hud"}),D,i(l,{category:"statistics"}),A,i(l,{category:"miscellaneous"})]))}});export{P as __pageData,N as default};
