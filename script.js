/* ═══════════════════════════════════════════════════════
   GALLO BUFFET — script.js
   ─────────────────────────────────────────────────────
   Ordem de execução:
     1. MANIFESTO DE IMAGENS  (window.GALLO_MANIFEST)
     2. Nav scroll
     3. Scroll Reveal
     4. FAQ Accordion
     5. Hero video fallback
     6. Carrosséis Peek + Modal Lightbox
═════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════
   1. MANIFESTO DE IMAGENS
   ─────────────────────────────────────────────────────
   Para adicionar fotos:
     1. Coloque o ficheiro na pasta correspondente
     2. Adicione o nome do ficheiro na lista "imagens"
     3. Guarde e recarregue a página
   Formatos suportados: .jpg · .jpeg · .png · .webp
══════════════════════════════════════════════════════ */
window.GALLO_MANIFEST = {
  carroseis: [
    {
      id:     'atendimento',
      titulo: 'Atendimento',
      descricao: 'Garçons uniformizados, presença discreta e atenção total ao casal e aos convidados durante toda a celebração.',
      pasta:  'Assets/Atendimento',
      imagens: [
        'GALLO BUFFET - CASAMENTO-26 (1).jpg',
        'GALLO BUFFET-015.jpg',
        'GALLO BUFFET-018.jpg',
        'GALLO BUFFET-072.jpg',
        'GALLO BUFFET-090.jpg',
        'GALLO BUFFET-106.jpg'
      ]
    },
    {
      id:     'finger-food',
      titulo: 'Finger Food',
      descricao: 'Filé de peixe com crosta de castanhas, mignon ao molho de jabuticaba, camarões ao creme de moqueca. Elegância no prato, excelência no serviço.',
      pasta:  'Assets/Finger Food',
      imagens: [
        'GALLO - BUFFET-01.jpg',
        'GALLO - BUFFET-02.jpg',
        'GALLO - BUFFET-03.jpg',
        'GALLO - BUFFET-04.jpg',
        'GALLO - BUFFET-05.jpg',
        'GALLO - BUFFET-06.jpg',
        'GALLO - BUFFET-07.jpg',
        'GALLO - BUFFET-08.jpg',
      ]
    },
    {
      id:     'ilha-baiana',
      titulo: 'Ilha Baiana',
      descricao: 'O primeiro abraço aos seus convidados. Bobó de camarão, moqueca de peixe ou catado de aratu. Bahia servida em porcelana, ainda antes dos brindes.',
      pasta:  'Assets/Ilha Baiana',
      imagens: [
        'GALLO BUFFET - 08NOV (1).jpg',
        'GALLO BUFFET - 08NOV (2).jpg',
        'GALLO BUFFET - 08NOV (3).jpg',
        'GALLO BUFFET - CASAMENTO-32.jpg',
        'GALLO BUFFET - CASAMENTO-33.jpg',
        'GALLO BUFFET -23.jpg',
        'GALLO BUFFET -24.jpg',
        'GALLO BUFFET-005.jpg',
        'GALLO BUFFET-009.jpg'
      ]
    },
    {
      id:     'mesa-entrada',
      titulo: 'Mesa de Entrada',
      descricao: 'Frios nobres, saladas de polvo, camarão e carpaccio, antepastos artesanais e pães selecionados, servida logo após a cerimônia.',
      pasta:  'Assets/Mesa de Entrada',
      imagens: [
        'GALLO BUFFET-050.jpg',
        'gallobuffet-02 (1).jpg',
        'gallobuffet-13 (1).jpg'
      ]
    },
    {
      id:     'paella',
      titulo: 'Paella',
      descricao: 'Preparada ao vivo, com frutos do mar frescos e o açafrão certo. Um espetáculo gastronômico que encanta pelo aroma antes mesmo de chegar ao prato.',
      pasta:  'Assets/Paella',
      imagens: [
        'IMGL6230.jpg',
        'IMGL6486.jpg',
        'IMGL6752.jpg',
        'IMGL6786.jpg'
      ]
    },
    {
      id:     'sobremesas',
      titulo: 'Sobremesas',
      descricao: 'O grand finale. Uma mesa de doces finos e sobremesas artesanais que encerra a jornada com leveza, sofisticação e muito sabor.',
      pasta:  'Assets/Sobremesas',
      imagens: [
        'IMGL5784.jpg',
        'IMGL5790.jpg',
        'IMGL5791.jpg',
        'IMGL5821.jpg'
      ]
    }
  ]
};


/* ══════════════════════════════════════════════════════
   2. NAV — fundo ao rolar
══════════════════════════════════════════════════════ */
const topnav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
  topnav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });


/* ══════════════════════════════════════════════════════
   3. SCROLL REVEAL
   Conteúdo sempre visível (opacity:1 no CSS).
   A classe "animate-in" dispara o keyframe só quando o
   elemento entra na viewport.
══════════════════════════════════════════════════════ */
function activateReveal(el) {
  el.classList.add('animate-in');
}

const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateReveal(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach(activateReveal);
}

/* Safety net: libera elementos ainda ocultos após a página assentar */
setTimeout(() => revealEls.forEach(activateReveal), 1500);


/* ══════════════════════════════════════════════════════
   4. FAQ ACCORDION
══════════════════════════════════════════════════════ */
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  /* Fecha todos os itens abertos */
  document.querySelectorAll('.faq-item').forEach((i) => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').classList.remove('open');
  });

  /* Abre o item clicado (somente se estava fechado) */
  if (!isOpen) {
    item.classList.add('open');
    answer.classList.add('open');
  }
}


/* ══════════════════════════════════════════════════════
   5. HERO — fallback de vídeo
   Quando o vídeo carrega, oculta o fallback animado.
   Se não houver vídeo, o fallback permanece visível.
══════════════════════════════════════════════════════ */
const heroVideo    = document.getElementById('hero-video');
const heroFallback = document.getElementById('hero-fallback');

if (heroVideo) {
  heroVideo.addEventListener('canplay', () => {
    heroFallback.style.transition = 'opacity 0.5s ease';
    heroFallback.style.opacity    = '0';
    setTimeout(() => { heroFallback.style.display = 'none'; }, 500);
  });
}


/* ══════════════════════════════════════════════════════
   6. CARROSSÉIS PEEK + MODAL LIGHTBOX
   ─────────────────────────────────────────────────────
   • Lê window.GALLO_MANIFEST e constrói os carrosséis
   • Efeito peek (~20% das laterais visíveis)
   • Card ativo brilhante, laterais escurecidas
   • Botões prev/next, dots, swipe e teclado
   • Clique no card ativo abre o modal lightbox
══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Referências do Modal ──────────────────────────── */
  const modal         = document.getElementById('peekModal');
  const modalTrack    = document.getElementById('peekModalTrack');
  const modalViewport = document.getElementById('peekModalViewport');
  const modalClose    = document.getElementById('peekModalClose');
  const modalPrev     = document.getElementById('peekModalPrev');
  const modalNext     = document.getElementById('peekModalNext');
  const modalCaption  = document.getElementById('peekModalCaption');
  const modalCounter  = document.getElementById('peekModalCounter');
  const container     = document.getElementById('carroseis-dinamicos');
  const loadingEl     = document.getElementById('carroseis-loading');

  const allInstances = [];
  let modalIndex  = 0;
  let modalCards  = [];
  let modalTotal  = 0;
  let modalTitles = [];

  /* ── Utilitário: calcula o offset de translação ────────
   * Carrossel principal: peek de 20% (efeito de preview)
   * Modal: peek de 8% (maximiza a imagem visível)
   * ─────────────────────────────────────────────────── */
  function calcOffset(viewport, firstCard, idx, isModal) {
    const vpW   = viewport.offsetWidth;
    const cardW = firstCard ? firstCard.offsetWidth : vpW * 0.52;
    const peek  = isModal ? vpW * 0.08 : vpW * 0.20;
    return peek - idx * cardW;
  }

  /* ── Swipe helper ──────────────────────────────────── */
  function addSwipe(el, onLeft, onRight) {
    let sx = null;
    el.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (sx === null) return;
      const dx = sx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) { dx > 0 ? onLeft() : onRight(); }
      sx = null;
    });
  }

  /* ── Render — carrossel principal ──────────────────── */
  function renderMain(inst, idx) {
    idx = Math.max(0, Math.min(inst.total - 1, idx));
    inst.current = idx;
    inst.track.style.transform = `translateX(${calcOffset(inst.viewport, inst.cards[0], idx)}px)`;
    inst.cards.forEach((c, i) => c.classList.toggle('active', i === idx));
    inst.dots.forEach((d, i)  => d.classList.toggle('active', i === idx));
    inst.btnPrev.disabled = idx === 0;
    inst.btnNext.disabled = idx === inst.total - 1;
  }

  /* ── Render — modal ────────────────────────────────── */
  function renderModal(idx) {
    idx = Math.max(0, Math.min(modalTotal - 1, idx));
    modalIndex = idx;
    modalTrack.style.transform = `translateX(${calcOffset(modalViewport, modalCards[0], idx, true)}px)`;
    modalCards.forEach((c, i) => c.classList.toggle('active', i === idx));
    modalCaption.textContent = modalTitles[idx] || '';
    modalCounter.textContent = `${idx + 1} / ${modalTotal}`;
  }

  /* ── Abrir modal ───────────────────────────────────── */
  function openModal(sourceCards, startIdx, titles) {
    modalTrack.innerHTML = '';
    modalTrack.style.transition = 'none';
    modalCards  = [];
    modalTitles = titles || [];
    modalTotal  = sourceCards.length;

    sourceCards.forEach(srcCard => {
      const slide = document.createElement('div');
      slide.className = 'peek-modal-card';

      const inner = document.createElement('div');
      inner.className = 'peek-modal-card-inner';

      /* Clona a imagem real */
      const srcImg = srcCard.querySelector('img.card-photo');
      if (srcImg) {
        const img = document.createElement('img');
        img.className = 'card-photo';
        img.src = srcImg.src;
        img.alt = srcImg.alt;
        img.onerror = function () { this.style.display = 'none'; };
        inner.appendChild(img);
      }

      /* Overlay e label */
      const ov = document.createElement('div');
      ov.className = 'carousel-card-overlay';
      inner.appendChild(ov);

      const lbl = srcCard.querySelector('.card-label-wrap');
      if (lbl) inner.appendChild(lbl.cloneNode(true));

      slide.appendChild(inner);
      modalTrack.appendChild(slide);
      modalCards.push(slide);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      modalTrack.style.transition = '';
      renderModal(startIdx);
    });
    modalClose.focus();
  }

  /* ── Fechar modal ──────────────────────────────────── */
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── Eventos do modal ──────────────────────────────── */
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  modalPrev.addEventListener('click', () => renderModal(modalIndex - 1));
  modalNext.addEventListener('click', () => renderModal(modalIndex + 1));
  addSwipe(modalViewport, () => renderModal(modalIndex + 1), () => renderModal(modalIndex - 1));

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  renderModal(modalIndex - 1);
    if (e.key === 'ArrowRight') renderModal(modalIndex + 1);
    if (e.key === 'Escape')     closeModal();
  });

  /* ── Construtor de carrossel ───────────────────────────
   * Recebe um objeto { id, titulo, pasta, imagens[] }
   * e devolve o elemento section já montado.
   * ─────────────────────────────────────────────────── */
  function buildCarousel(config) {
    const section  = document.createElement('div');
    section.className = 'mb-16 reveal';

    /* Cabeçalho — centralizado, com descrição */
    const header = document.createElement('div');
    header.className = 'text-center mb-6 px-4';
    header.style.cssText = 'max-width:580px; margin-left:auto; margin-right:auto;';
    header.innerHTML = `
      <h3 class="font-display" style="font-size:clamp(1.5rem,4vw,2.1rem); color:#6e1407; font-family:Maharlika,serif; margin-bottom:0.5rem;">
        ${config.titulo}
      </h3>
      <p style="font-family:'DM Sans',sans-serif; font-size:0.95rem; color:#a3642a; line-height:1.6;">
        ${config.descricao || ''}
      </p>`;
    section.appendChild(header);

    /* peek-wrap */
    const wrap = document.createElement('div');
    wrap.className = 'peek-wrap';
    wrap.dataset.peekId = config.id;

    const viewport = document.createElement('div');
    viewport.className = 'peek-viewport';

    const track = document.createElement('div');
    track.className = 'peek-track';
    viewport.appendChild(track);
    wrap.appendChild(viewport);

    /* Cards */
    const cards  = [];
    const titles = [];

    config.imagens.forEach((filename, i) => {
      const imgPath = `${config.pasta}/${filename}`;
      const rawName = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
      const label   = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      titles.push(`${config.titulo} — ${label}`);

      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.dataset.index = i;
      card.dataset.title = label;

      const inner = document.createElement('div');
      inner.className = 'carousel-card-inner';

      /* Imagem real */
      const img = document.createElement('img');
      img.className = 'card-photo';
      img.src     = imgPath;
      img.alt     = label;
      img.loading = 'lazy';
      img.onerror = function () { this.style.display = 'none'; };
      inner.appendChild(img);

      /* Placeholder */
      const ph = document.createElement('div');
      ph.className = 'card-placeholder';
      ph.innerHTML = `
        <svg width="36" height="36" fill="none" stroke="#fff" stroke-width="1.2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span class="ph-label">${label}</span>
        <span class="ph-path">${imgPath}</span>`;
      inner.appendChild(ph);

      /* Overlay + label de texto */
      const ov = document.createElement('div');
      ov.className = 'carousel-card-overlay';
      inner.appendChild(ov);

      const lblWrap = document.createElement('div');
      lblWrap.className = 'card-label-wrap carousel-card-label text-white';
      lblWrap.innerHTML = `
        <p class="font-display text-lg font-semibold" style="font-family:Maharlika,serif;">${label}</p>
        <p class="font-subtitle text-xs text-white/70" style="font-family:Arapey,serif;">${config.titulo.replace(/^.{2}\s/, '')}</p>`;
      inner.appendChild(lblWrap);

      /* Hint de ampliar */
      const hint = document.createElement('div');
      hint.className = 'peek-hint';
      hint.innerHTML = '<span>🔍 Ampliar</span>';
      inner.appendChild(hint);

      card.appendChild(inner);
      track.appendChild(card);
      cards.push(card);
    });

    /* Botões prev / next */
    function makeNavBtn(dir) {
      const btn = document.createElement('button');
      btn.className = `peek-nav peek-${dir}`;
      btn.setAttribute('aria-label', dir === 'prev' ? 'Anterior' : 'Próximo');
      btn.innerHTML = dir === 'prev'
        ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`
        : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`;
      return btn;
    }
    const btnPrev = makeNavBtn('prev');
    const btnNext = makeNavBtn('next');
    wrap.appendChild(btnPrev);
    wrap.appendChild(btnNext);
    section.appendChild(wrap);

    /* Dots */
    const dotsEl = document.createElement('div');
    dotsEl.className = 'peek-dots';
    const dots = cards.map((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'peek-dot';
      dot.setAttribute('aria-label', `Foto ${i + 1}`);
      dotsEl.appendChild(dot);
      return dot;
    });
    section.appendChild(dotsEl);

    /* Instância */
    const inst = { viewport, track, cards, dots, btnPrev, btnNext, total: cards.length, current: 0 };

    btnPrev.addEventListener('click', () => renderMain(inst, inst.current - 1));
    btnNext.addEventListener('click', () => renderMain(inst, inst.current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => renderMain(inst, i)));

    addSwipe(viewport,
      () => renderMain(inst, inst.current + 1),
      () => renderMain(inst, inst.current - 1));

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.index, 10);
        if (idx === inst.current) {
          openModal(cards, idx, titles);
        } else {
          renderMain(inst, idx);
        }
      });
    });

    requestAnimationFrame(() => renderMain(inst, 0));

    section._inst = inst;
    return { section, inst };
  }

  /* ── Inicialização a partir do manifesto ───────────── */
  function initCarousels() {
    const data = window.GALLO_MANIFEST;

    if (!data || !data.carroseis) {
      if (loadingEl) {
        loadingEl.innerHTML = `
          <p style="color:#b03900;font-family:'DM Sans',sans-serif;font-size:.9rem;line-height:1.6;">
            ⚠️ Manifesto de imagens não encontrado.<br>
            Certifique-se de que <strong>window.GALLO_MANIFEST</strong> está definido no script.js.
          </p>`;
      }
      return;
    }

    if (loadingEl) loadingEl.remove();

    data.carroseis.forEach(config => {
      if (!config.imagens || !config.imagens.length) return;
      const { section } = buildCarousel(config);
      container.appendChild(section);
      allInstances.push(section._inst);
    });

    /* Activa scroll-reveal nos novos elementos */
    document.querySelectorAll('#carroseis-dinamicos .reveal').forEach(activateReveal);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
  } else {
    initCarousels();
  }

  /* ── Resize — recalcula offsets ────────────────────── */
  let rTimer;
  window.addEventListener('resize', () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(() => {
      const allTracks = document.querySelectorAll('.peek-track, #peekModalTrack');
      allTracks.forEach(t => { t.style.transition = 'none'; });

      allInstances.forEach(inst => {
        const off = calcOffset(inst.viewport, inst.cards[0], inst.current, false);
        inst.track.style.transform = `translateX(${off}px)`;
      });

      /* Recalcula o modal se estiver aberto */
      if (modal.classList.contains('open') && modalCards.length) {
        modalTrack.style.transform =
          `translateX(${calcOffset(modalViewport, modalCards[0], modalIndex, true)}px)`;
      }

      requestAnimationFrame(() => {
        allTracks.forEach(t => { t.style.transition = ''; });
      });
    }, 100);
  });

})();