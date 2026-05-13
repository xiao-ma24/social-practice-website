/**
 * 青春足迹·文化研学 — 交互逻辑
 */
(function () {
  'use strict';

  var provinceGrid = document.getElementById('province-grid');
  var routeList = document.getElementById('route-list');
  var detailPanel = document.getElementById('detail-panel');
  var provinceTitle = document.getElementById('province-title');
  var provinceDesc = document.getElementById('province-desc');
  var navLinks = document.querySelectorAll('[data-nav]');

  var currentProvince = 'gansu';
  var currentPointId = 'lanzhou';

  // ==================== 初始化 ====================
  function init() {
    loadProvince(currentProvince, currentPointId);
    setupTimeline();
    setupRouteDelegation();
    setupScrollAnimations();
    setupSmoothScroll();
    setupMobileMenu();
    setupFooterLinks();
  }

  // ==================== 加载省份 ====================
  function loadProvince(provinceKey, pointId) {
    var province = cultureData[provinceKey];
    if (!province) return;
    currentProvince = provinceKey;
    currentPointId = pointId || province.points[0].id;

    provinceTitle.textContent = province.name;
    provinceDesc.textContent = province.description;
    renderRoutePoints(province);
    renderDetail(provinceKey, currentPointId);
    updateTimelineActive(provinceKey);
  }

  // ==================== 渲染路线点列表 ====================
  function renderRoutePoints(province) {
    routeList.innerHTML = province.points.map(function (point, index) {
      var isActive = point.id === currentPointId;
      return '<div class="route-point' + (isActive ? ' active' : '') + '" data-point="' + point.id + '">' +
        '<span class="route-number">' + ('0' + (index + 1)).slice(-2) + '</span>' +
        '<div class="route-info"><h4>' + point.name + '</h4><p>' + point.culture.title + '</p></div>' +
        '<svg class="route-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">' +
        '<path d="M7 4L14 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg></div>';
    }).join('');
  }

  // ==================== 渲染详情（模块化卡片） ====================
  function renderDetail(provinceKey, pointId) {
    var point = cultureData[provinceKey].points.find(function (p) { return p.id === pointId; });
    if (!point) return;

    detailPanel.innerHTML =
      // 地点标题卡片
      '<div class="detail-card fade-in">' +
        '<div class="detail-head">' +
          '<h2 class="detail-title">' + point.name + '</h2>' +
          '<span class="detail-badge">' + cultureData[provinceKey].name + '</span>' +
        '</div>' +
      '</div>' +

      // 美食卡片
      '<div class="module-card food-card fade-in">' +
        '<div class="module-card-header">' +
          '<span class="module-icon">🍜</span>' +
          '<h3>' + point.food.title + '</h3>' +
        '</div>' +
        '<div class="module-card-body">' +
          '<img src="' + point.food.image + '" alt="' + point.food.title + '" loading="lazy">' +
          '<p>' + point.food.description + '</p>' +
        '</div>' +
      '</div>' +

      // 文化卡片
      '<div class="module-card culture-card fade-in">' +
        '<div class="module-card-header">' +
          '<span class="module-icon">🏛</span>' +
          '<h3>' + point.culture.title + '</h3>' +
        '</div>' +
        '<div class="module-card-body">' +
          '<img src="' + point.culture.image + '" alt="' + point.culture.title + '" loading="lazy">' +
          '<p>' + point.culture.description + '</p>' +
        '</div>' +
      '</div>' +

      // 非遗传承意义
      '<div class="heritage-card fade-in">' +
        '<span class="module-icon">📜</span>' +
        '<h3>非遗与传承意义</h3>' +
        '<p>' + point.heritage + '</p>' +
      '</div>' +

      // 团队感悟（引用风格）
      '<div class="insight-card fade-in">' +
        '<span class="module-icon">✍</span>' +
        '<h3>团队实践感悟</h3>' +
        '<p>' + point.insight + '</p>' +
      '</div>';

    detailPanel.scrollTop = 0;
  }

  // ==================== 省份卡片交互 ====================
  function setupTimeline() {
    provinceGrid.addEventListener('click', function (e) {
      var card = e.target.closest('.province-card');
      if (!card) return;
      var key = card.dataset.province;
      if (key && cultureData[key]) {
        loadProvince(key, cultureData[key].points[0].id);
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function updateTimelineActive(provinceKey) {
    var cards = provinceGrid.querySelectorAll('.province-card');
    cards.forEach(function (el) {
      el.classList.remove('active');
      if (el.dataset.province === provinceKey) {
        el.classList.add('active');
      }
    });
  }

  // ==================== 路线点点击 ====================
  function setupRouteDelegation() {
    routeList.addEventListener('click', function (e) {
      var pointEl = e.target.closest('.route-point');
      if (!pointEl) return;
      var pointId = pointEl.dataset.point;
      if (!pointId) return;
      currentPointId = pointId;
      renderRoutePoints(cultureData[currentProvince]);
      renderDetail(currentProvince, pointId);
      detailPanel.scrollTop = 0;
    });
  }

  // ==================== 滚动动画 ====================
  function setupScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ==================== 平滑滚动 ====================
  function setupSmoothScroll() {
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.dataset.nav;
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ==================== 移动端菜单 ====================
  function setupMobileMenu() {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (!menuToggle || !navMenu) return;
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('open');
    });
    navMenu.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-nav')) {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==================== Footer省份链接 ====================
  function setupFooterLinks() {
    document.querySelectorAll('[data-province-link]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var key = this.dataset.provinceLink;
        if (key && cultureData[key]) {
          loadProvince(key, cultureData[key].points[0].id);
          document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ==================== 启动 ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
