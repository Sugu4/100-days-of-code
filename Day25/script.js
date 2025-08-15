// Elements
const input = document.getElementById('input');
const output = document.getElementById('output');
const statusEl = document.getElementById('status');

const btnValidate = document.getElementById('btnValidate');
const btnFormat   = document.getElementById('btnFormat');
const btnMinify   = document.getElementById('btnMinify');
const btnExample  = document.getElementById('btnExample');
const btnCopy     = document.getElementById('btnCopy');
const btnDownload = document.getElementById('btnDownload');
const btnClear    = document.getElementById('btnClear');
const fileInput   = document.getElementById('fileInput');
const themeToggle = document.getElementById('themeToggle');

// Helpers
function setStatus(msg, type='info'){
  statusEl.textContent = msg;
  if(type==='ok')   statusEl.style.color = 'var(--good)';
  else if(type==='err') statusEl.style.color = 'var(--bad)';
  else statusEl.style.color = 'var(--muted)';
}

function parseWithDetails(txt){
  try{
    const obj = JSON.parse(txt);
    return { ok:true, obj };
  }catch(err){
    // Try to extract position or line/column from error message
    const mPos = /position\s+(\d+)/i.exec(err.message);
    const mLC  = /line\s+(\d+)\s*column\s+(\d+)/i.exec(err.message);

    let details = err.message;
    if(mLC){
      details += ` (Zeile ${mLC[1]}, Spalte ${mLC[2]})`;
    }else if(mPos){
      const pos = Number(mPos[1]);
      const { line, col } = posToLineCol(txt, pos);
      details += ` (Zeile ${line}, Spalte ${col})`;
    }
    return { ok:false, error: details };
  }
}

function posToLineCol(str, pos){
  let line = 1, col = 1;
  for(let i=0;i<pos && i<str.length;i++){
    if(str[i] === '\n'){ line++; col = 1; }
    else { col++; }
  }
  return { line, col };
}

// Actions
btnValidate.addEventListener('click', () => {
  const res = parseWithDetails(input.value.trim());
  if(res.ok){
    const pretty = JSON.stringify(res.obj, null, 2);
    setStatus('✅ Gültiges JSON.', 'ok');
    if(!output.value) output.value = pretty;
  }else{
    setStatus('❌ Ungültiges JSON: ' + res.error, 'err');
  }
});

btnFormat.addEventListener('click', () => {
  const res = parseWithDetails(input.value.trim());
  if(res.ok){
    output.value = JSON.stringify(res.obj, null, 2);
    setStatus('✨ Formatiert (Einrückung: 2 Leerzeichen).', 'ok');
  }else{
    setStatus('❌ Formatieren fehlgeschlagen: ' + res.error, 'err');
  }
});

btnMinify.addEventListener('click', () => {
  const res = parseWithDetails(input.value.trim());
  if(res.ok){
    output.value = JSON.stringify(res.obj);
    setStatus('📦 Minifiziert.', 'ok');
  }else{
    setStatus('❌ Minifizieren fehlgeschlagen: ' + res.error, 'err');
  }
});

btnExample.addEventListener('click', () => {
  input.value = JSON.stringify({
    project:"100-days-of-code",
    day:25,
    valid:true,
    items:[{id:1, tag:"json"}, {id:2, tag:"tools"}]
  }, null, 2);
  setStatus('📋 Beispiel eingefügt.', 'info');
});

btnCopy.addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText(output.value);
    setStatus('📋 Ausgabe kopiert.', 'ok');
  }catch{
    // Fallback
    output.select();
    document.execCommand('copy');
    setStatus('📋 Ausgabe kopiert (Fallback).', 'ok');
  }
});

btnDownload.addEventListener('click', () => {
  const blob = new Blob([output.value || input.value], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(url);
  setStatus('💾 Datei heruntergeladen.', 'ok');
});

btnClear.addEventListener('click', () => {
  input.value = '';
  output.value = '';
  setStatus('🧹 Felder geleert.', 'info');
});

fileInput.addEventListener('change', async (e) => {
  const file = e.target.files?.[0];
  if(!file) return;
  const text = await file.text();
  input.value = text;
  setStatus(`📂 Geladen: ${file.name}`, 'info');
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
