document.addEventListener('DOMContentLoaded',()=>{
  const videos=[
    {src:'videos2/recharge-gone.mp4',cat:'SHORT-FORM EDIT',title:'Recharge Gone',desc:'Social comedy edit with sharp pacing and expressive storytelling.'},
    {src:'videos2/surprise.mp4',cat:'SHORT-FORM EDIT',title:'The Surprise',desc:'Story-driven edit with dialogue, timing and emotional pacing.'},
    {src:'videos2/the-conversation.mp4',cat:'SOCIAL VIDEO',title:'The Conversation',desc:'Dialogue-led storytelling with natural pacing and clean visual flow.'},
    {src:'videos2/employee-4217.mp4',cat:'VERTICAL EDIT',title:'Employee #4217',desc:'Character-driven storytelling with a structured cinematic edit.'},
    {src:'videos/v_doctor_drama.mp4.mp4',cat:'MICRODRAMA',title:'The 59th Minute',desc:'Character tension, pacing and cinematic continuity.'},
    {src:'videos/v_hel_fashion.mp4.mp4',cat:'FASHION FILM',title:'Hel / Premium Essentials',desc:'Product-focused visual direction and polished rhythm.'},
    {src:'videos/v_spidey.mp4.mp4',cat:'PRODUCT REEL',title:'Spider-Man Crochet Pouch',desc:'Macro detail, speed and sound-led transitions.'},
    {src:'videos/v_custom_app.mp4.mp4',cat:'PRODUCT CREATIVE',title:'Custom Tee / App Launch',desc:'Product flow, beat-synced editing and clear messaging.'},
    {src:'videos/v_seekho.mp4.mp4',cat:'PERFORMANCE CREATIVE',title:'Seekho / Finance Mythbuster',desc:'Kinetic type, motion and retention-focused pacing.'},
    {src:'videos/v_edit_room.mp4.mp4',cat:'EDITORIAL',title:'The Edit Room',desc:'Dialogue edits, subtitles, sound and editorial rhythm.'},
    {src:'videos/v_saas_hotel.mp4.mp4',cat:'PRODUCT MARKETING',title:'Smart Hotel Cloud ERP',desc:'Feature-led storytelling with clear product communication.'},
    {src:'videos/v_ucmas.mp4.mp4',cat:'BRAND CAMPAIGN',title:'UCMAS Bazpur',desc:'Commercial graphics, voice sync and CTA-driven motion.'}
  ];
  let current=0;
  const video=document.getElementById('workVideo');
  const set=(i,play=false)=>{current=(i+videos.length)%videos.length;const v=videos[current];video.pause();video.src=v.src;video.load();if(play)video.play().catch(()=>{});document.getElementById('videoCategory').textContent=v.cat;document.getElementById('videoTitle').textContent=v.title;document.getElementById('videoDescription').textContent=v.desc;document.getElementById('videoNum').textContent=String(current+1).padStart(2,'0');document.getElementById('progressBar').style.width=`${((current+1)/videos.length)*100}%`};
  const prevBtn=document.getElementById('prevBtn');
  const nextBtn=document.getElementById('nextBtn');
  if(prevBtn) prevBtn.addEventListener('click',(e)=>{e.preventDefault();set(current-1,true);});
  if(nextBtn) nextBtn.addEventListener('click',(e)=>{e.preventDefault();set(current+1,true);});
  video.addEventListener('touchstart',e=>video._x=e.changedTouches[0].screenX,{passive:true});
  video.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-video._x;if(Math.abs(dx)>45)set(current+(dx<0?1:-1),true)},{passive:true});
  document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;if(e.key==='ArrowLeft')set(current-1,true);if(e.key==='ArrowRight')set(current+1,true)});
  const fs=document.getElementById('fullscreenBtn');
  fs.addEventListener('click',async()=>{try{if(!document.fullscreenElement){if(video.requestFullscreen)await video.requestFullscreen();else if(video.webkitEnterFullscreen)video.webkitEnterFullscreen()}else await document.exitFullscreen()}catch(e){}});
  video.addEventListener('error',()=>{
    const el=document.getElementById('videoDescription');
    if(el) el.textContent='Video could not be loaded. Please check the file path.';
  });
  set(0);
});
