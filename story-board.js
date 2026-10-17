/* TIME OUT story board: adds relationship map, story timeline, key lines and open-questions tracker
   to the character map. Load with <script src="story-board.js"></script> just before </body>. */
(function(){
const KEY='filmStoryBoard_v1';
const REL=[
['Big Yatch ↔ Guy B','Childhood friends and college basketball teammates.','Binds them: shared history, talent, affection, loyalty, rivalry, and the partnership they never fully achieved.\nDivides them: money, opportunity, manipulation, game-fixing, and Guy B’s refusal to risk his future.\nUnderlying tension: Big Yatch wants his friend back, but he wants control as well. Guy B wants to believe the friendship is genuine, but he cannot ignore the danger.'],
['Big Yatch → The woman','The woman he wanted but could never win.','He uses humor, flirting, boasts, and money to conceal vulnerability. She offers him warmth but never the romantic choice he wants.\nOutcome: she kills him. His final realization that she betrayed him destroys his remaining illusion of control.'],
['The woman → Guy B','Her longstanding, unspoken love is suggested but never explicitly confirmed.','She saves him by killing Big Yatch. Her deeper motives stay open to interpretation.\nDramatic irony: Guy B survives without knowing what she did.'],
['The woman ↔ Paloschindoli','Marriage.','He wants control of the gambling operation and is willing to use her history with the two former teammates.\nUnresolved: whether he understands how much she is doing independently.'],
['The woman ↔ Team owner','Secret romantic or sexual relationship.','She is connected to the owner while he is involved in the operation and anticipating a buyout.'],
['The woman ↔ Cowboy','Partners in the larger operation.','He has money and influence; she is positioning him. He knows she killed Big Yatch.\nAudience question: how far does their plan extend beyond this film?'],
['Big Yatch ↔ Mob-connected cousin','Unauthorized side-bet partners.','The cousin’s greed creates information leakage and increases the danger.'],
['Big Yatch ↔ Younger cousin','Family and protection.','Big Yatch has kept the younger cousin away from the criminal side of his life.\nOutcome: the unanswered final phone call becomes an emotional closing detail and a possible future story thread.']
];
const BEATS=[
['I','The bar (cold open)','Four referees at a bar. Guy B says he is done with game-fixing; the others push him to stay because the next payout is the biggest yet. Big Yatch tries to convince him, knowing he may not.'],
['I','The waitress’s warning','“I can’t get your cousin to talk with his mouth swollen shut.” Low-key, no lengthy explanation.'],
['I','The refill','The involved waitress sends another waitress to refill a particular person’s drink (recipient undecided). Across the street, a gunman with a rifle is ready, offstage until the shot.'],
['I','The shot','Intended for Big Yatch, who is hit. The audience should not yet know the full circumstances. Cut to black.'],
['I','Big Yatch’s narration','Over black: “I bet it doesn’t matter how I got here.” The story unfolds through his perspective and selective flashbacks. Reconcile the shooting and the later poisoning before finalizing this opening.'],
['II','College flashbacks','Short, selective fragments: childhood friends and teammates, Guy B the better player, Big Yatch with the confidence, money, and car, the woman he could not win, affection alongside rivalry.'],
['II','Two different downfalls','Big Yatch’s ambitions end with an injury; Guy B’s life is derailed by gambling trouble and its legal consequences. Big Yatch becomes a referee with money and confidence; Guy B struggles to rebuild.'],
['II','The reunion','Big Yatch offers Guy B a refereeing opportunity. The friendship becomes active again, and the audience should believe the two might finally succeed together.'],
['II','The cost of opportunity','Guy B notices suspicious officiating. Big Yatch’s unauthorized side bets put the operation at risk. His line about killing for a quick mill shows his appetite for risk.'],
['II','The cousin’s mistake','The mob-connected cousin brags about the side bet to an escort with mob ties. Information reaches the mob; the cousin is captured and beaten that same night.'],
['II','The operation unravels','Guy B realizes the games are manipulated and refuses to continue. Big Yatch wants him to stay. The audience feels the pull of the friendship and why Guy B cannot safely agree.'],
['II','The woman and the power structure','She reappears as the connection among Guy B, Big Yatch, Paloschindoli, the team owner, and the cowboy, revealed through brief scenes. The kitchen scene at the owner’s house establishes their private relationship.'],
['III','Return to the bar','The opening scene gains new meaning. Guy B knows something has gone wrong but does not know Big Yatch was targeted or that the woman is responsible for saving him.'],
['III','The final betrayal','She gives Big Yatch a moment of real warmth; he laughs. The poison takes effect and he realizes it is her. “You’ll never be enough for him you just a rich bitch.” / “The richest bitch you ever met.” She walks away. He calls his younger cousin and dies before the call becomes a conversation.'],
['III','Guy B’s legitimate victory','Back on the court, Guy B makes a legitimate, game-changing call and the crowd goes wild. He believes he has escaped and has no idea what the woman did.'],
['III','The final reveal','The mob boss is furious that the outcome did not go his way. The camera drifts to the cowboy, who tips his hat to the woman. She winks back. Corruption may survive by changing hands.']
];
const LINES=[
['The cold-open line','Big Yatch, over black: “I bet it doesn’t matter how I got here.”','Establishes him as the storyteller and signals that his account may be incomplete or self-serving.'],
['The warning','The waitress: “I can’t get your cousin to talk with his mouth swollen shut.”','Introduces danger and implies the cousin’s capture without exposition.'],
['The dangerous boast','Big Yatch: “I don’t care who I gotta kill for a quick mill.”','Reveals his appetite for risk and foreshadows the cost of treating everything as a game.'],
['The poisoning scene','Big Yatch: “You’ll never be enough for him you just a rich bitch.” The woman: “The richest bitch you ever met.”','His last attempt to wound her shows jealousy and vulnerability. Her answer reasserts control, and she does not explain herself.'],
['The unanswered phone call','Younger cousin: “Cuz, where you at? Cuz, you good?”','Reveals the family bond Big Yatch tried to protect and leaves an emotional afterimage of his death.'],
['The cowboy’s final comment','A playful but threatening remark that Big Yatch “took the fun out of the game.”','Two meanings: his reckless side bets made the operation messy, and his death has changed the game for everyone. Exact wording is still open.']
];
const QS=[
'Shooting versus poisoning: are these the same night, separate attempts, or is one version changing?',
'Guy B’s legal history: convicted and imprisoned, nearly jailed, or away for another reason? For how long?',
'The waitress’s refill: whose drink, and what is the purpose?',
'The mob-connected cousin: what does he know that could expose the woman, and what would he reveal if Big Yatch reached him?',
'Paloschindoli’s involvement: did he order, authorize, or simply benefit from the hit? How much does he know about her independent plan?',
'The team buyout: who owns the team, who is buying, and how does the cowboy’s role affect the gambling operation?',
'The team owner’s fate: stays involved, loses control, or becomes another casualty?',
'The woman’s feelings: how much is love, how much is power or self-interest? (Intentionally never answered definitively.)',
'The cowboy’s endgame: what does he want beyond the team, and how far does the partnership extend?',
'The younger cousin: an emotional final detail only, or important in a sequel?',
'The cowboy’s final dialogue: what exactly does he say about Big Yatch taking the fun out of the game?',
'Names still needed: Guy B, the woman, the team owner, both cousins, the waitress/escort, and the pimp friend.'
];

let st={t:{},q:{}};
try{const r=JSON.parse(localStorage.getItem(KEY));if(r&&r.t&&r.q)st=r;}catch(e){}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function persist(){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){}}
const ed=(id,def,cls)=>'<div class="sb-ed '+(cls||'')+'" contenteditable="true" spellcheck="true" data-id="'+id+'">'+esc(st.t[id]!==undefined?st.t[id]:def)+'</div>';

function build(){
 const rel=REL.map((r,i)=>'<article class="sb-card"><h3>'+esc(r[0])+'</h3><p class="sb-sub">'+esc(r[1])+'</p>'+ed('rel'+i,r[2])+'</article>').join('');
 const acts={I:'Act I: The game is already in trouble',II:'Act II: How the friends got here',III:'Act III: Who really controls the game?'};
 let last='',n=0,beats='';
 BEATS.forEach((b,i)=>{
  if(b[0]!==last){last=b[0];beats+='<h3 class="sb-act">'+acts[b[0]]+'</h3>';}
  n++;
  beats+='<div class="sb-beat"><span class="sb-n">'+n+'</span><div><strong>'+esc(b[1])+'</strong>'+ed('beat'+i,b[2])+'</div></div>';
 });
 const lines=LINES.map((l,i)=>'<article class="sb-card"><h3>'+esc(l[0])+'</h3><blockquote>'+esc(l[1])+'</blockquote>'+ed('line'+i,l[2])+'</article>').join('');
 const qs=QS.map((q,i)=>{const s=st.q[i]||{};return '<div class="sb-q'+(s.d?' done':'')+'"><label><input type="checkbox" data-q="'+i+'"'+(s.d?' checked':'')+'> <span>'+esc(q)+'</span></label><textarea data-qn="'+i+'" placeholder="Decision, or options you are weighing">'+esc(s.n||'')+'</textarea></div>';}).join('');
 return '<nav class="sb-nav" aria-label="Story board sections"><a href="#sb-rel">Relationship map</a><a href="#sb-time">Story timeline</a><a href="#sb-lines">Key lines</a><a href="#sb-q">Open questions <b id="sbCount"></b></a></nav>'+
 '<div class="sb-head" id="sb-rel"><h2>Relationship map</h2><p>Who loves, manipulates, protects, betrays, or controls whom. Click any text to edit.</p></div><div class="sb-grid">'+rel+'</div>'+
 '<div class="sb-head" id="sb-time"><h2>Story timeline</h2><p>The sequence beat by beat, in three acts.</p></div><div class="sb-beats">'+beats+'</div>'+
 '<div class="sb-head" id="sb-lines"><h2>Key lines and moments</h2><p>The dialogue the story is built around, and why each line is there.</p></div><div class="sb-grid">'+lines+'</div>'+
 '<div class="sb-head" id="sb-q"><h2>Open questions</h2><p>Check a question off once it is decided and record the decision.</p></div><div class="sb-qs">'+qs+'</div>'+
 '<div class="sb-tools"><button type="button" id="sbExport">Export story board</button><button type="button" id="sbReset">Reset story board</button></div>';
}

const css=document.createElement('style');
css.textContent='.sb{margin-top:34px}.sb-nav{position:sticky;top:58px;z-index:4;display:flex;flex-wrap:wrap;gap:8px;padding:10px 0;background:var(--paper,#f5f2ec)}.sb-nav a{border:1px solid #bbb1a6;border-radius:99px;padding:6px 14px;font-size:13px;color:var(--ink,#171717);text-decoration:none;background:var(--card,#fffdf9)}.sb-nav a:hover{border-color:var(--accent,#8e2528);color:var(--accent,#8e2528)}.sb-nav b{font-weight:600;color:var(--accent,#8e2528)}.sb-head{margin:34px 0 12px;border-bottom:1px solid var(--line,#d9d2c8);padding-bottom:9px;scroll-margin-top:110px}.sb-head h2{font:500 25px Georgia,serif;margin:0}.sb-head p{font-size:13px;color:var(--muted,#666);margin:3px 0 0}.sb-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:15px}.sb-card{background:var(--card,#fffdf9);border:1px solid var(--line,#d9d2c8);border-radius:11px;padding:16px}.sb-card h3{font:500 20px Georgia,serif;margin:0 0 3px}.sb-sub{font-size:13px;color:var(--accent,#8e2528);margin:0 0 8px}.sb-card blockquote{margin:0 0 8px;padding-left:12px;border-left:3px solid var(--accent,#8e2528);font:italic 16px/1.4 Georgia,serif}.sb-ed{font-size:13.5px;line-height:1.55;white-space:pre-wrap;border-radius:5px;padding:3px 4px;margin:0 -4px}.sb-ed:hover{background:#f3ece2}.sb-ed:focus{outline:2px solid #c69b92;background:#fff}.sb-act{font:500 21px Georgia,serif;margin:22px 0 8px;color:var(--accent,#8e2528)}.sb-beat{display:flex;gap:14px;background:var(--card,#fffdf9);border:1px solid var(--line,#d9d2c8);border-radius:9px;padding:12px 14px;margin-bottom:8px}.sb-n{flex:0 0 28px;height:28px;border-radius:50%;background:var(--accent,#8e2528);color:#fff;font-size:13px;display:flex;align-items:center;justify-content:center;margin-top:2px}.sb-qs{display:grid;gap:10px}.sb-q{background:var(--card,#fffdf9);border:1px solid var(--line,#d9d2c8);border-radius:9px;padding:12px 14px}.sb-q label{display:flex;gap:10px;font-size:14px;cursor:pointer}.sb-q input{margin-top:4px;accent-color:var(--accent,#8e2528)}.sb-q textarea{width:100%;margin-top:8px;min-height:52px;border:1px solid #ddd4ca;border-radius:6px;padding:8px;font:13px/1.45 system-ui;resize:vertical}.sb-q.done{background:#f1f4ec;border-color:#c5d1b8}.sb-q.done label span{text-decoration:line-through;color:#6b6b6b}.sb-tools{display:flex;gap:8px;margin-top:24px}.sb-tools button{border:1px solid #bbb1a6;border-radius:7px;background:var(--card,#fffdf9);padding:9px 12px;font:13px system-ui;cursor:pointer}@media(max-width:540px){.sb-nav{top:0;position:static}}@media print{.sb-nav,.sb-tools{display:none}.sb-card,.sb-beat,.sb-q{break-inside:avoid}.sb-q textarea{border:0}}';
document.head.appendChild(css);

const sec=document.createElement('section');sec.className='sb';sec.innerHTML=build();
const anchor=document.querySelector('.notes');
if(anchor)anchor.before(sec);else(document.querySelector('main')||document.body).appendChild(sec);

function count(){const d=QS.filter((_,i)=>st.q[i]&&st.q[i].d).length;const el=document.getElementById('sbCount');if(el)el.textContent='('+d+' of '+QS.length+' decided)';}
count();
sec.addEventListener('input',e=>{
 const t=e.target;
 if(t.dataset.id!==undefined){st.t[t.dataset.id]=t.innerText;}
 else if(t.dataset.qn!==undefined){const i=t.dataset.qn;st.q[i]=Object.assign({},st.q[i],{n:t.value});}
 else if(t.dataset.q!==undefined){const i=t.dataset.q;st.q[i]=Object.assign({},st.q[i],{d:t.checked});t.closest('.sb-q').classList.toggle('done',t.checked);count();}
 persist();
});
document.getElementById('sbExport').addEventListener('click',()=>{
 const b=new Blob([JSON.stringify({project:'TIME OUT story board',exportedAt:new Date().toISOString(),edits:st},null,2)],{type:'application/json'});
 const u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='story-board-backup.json';a.click();URL.revokeObjectURL(u);
});
document.getElementById('sbReset').addEventListener('click',()=>{
 if(!confirm('Reset the story board to the original text and clear all decisions? Export a backup first if needed.'))return;
 st={t:{},q:{}};persist();sec.innerHTML=build();count();
});
})();
