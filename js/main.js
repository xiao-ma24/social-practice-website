/**
 * 青春足迹·文化研学 — 交互逻辑
 */
(function () {
  'use strict';

  var provinceGrid = document.getElementById('province-grid');
  var cityNavList = document.getElementById('city-nav-list');
  var cityContent = document.getElementById('city-content');
  var navLinks = document.querySelectorAll('[data-nav]');

  var currentProvince = 'gansu';
  var currentCityId = null;

  // ==================== 初始化 ====================
  function init() {
    setupScrollSpy();
    loadProvince(currentProvince);
    setupTimeline();
    setupCityNavClicks();
    setupScrollAnimations();
    setupSmoothScroll();
    setupMobileMenu();
    setupFooterLinks();
  }

  // ==================== 加载省份 ====================
  function loadProvince(provinceKey) {
    var province = cultureData[provinceKey];
    if (!province) return;
    currentProvince = provinceKey;
    currentCityId = province.points[0].id;
    renderCityNav(province);
    renderCityModules(province);
    updateTimelineActive(provinceKey);
  }

  // ==================== 渲染城市导航 ====================
  function renderCityNav(province) {
    cityNavList.innerHTML = province.points.map(function (point, index) {
      var isActive = point.id === currentCityId;
      var num = ('0' + (index + 1)).slice(-2);
      return '<a class="city-nav-item' + (isActive ? ' active' : '') + '" data-city="' + point.id + '" href="#city-' + point.id + '">' +
        '<div class="nav-num">' + num + '</div>' +
        '<div class="nav-name">' + point.name + '</div>' +
      '</a>';
    }).join('');
  }

  // ==================== 渲染城市模块 ====================
  function renderCityModules(province) {
    cityContent.innerHTML = province.points.map(function (point) {
      return buildCityModule(province, point);
    }).join('');
    bindScrollSpy();
  }

  function buildCityModule(province, point) {
    var provinceKey = province.name;
    var labelText = (province.fullName || province.name) + ' · ' + point.name;

    return '<article class="city-module" id="city-' + point.id + '">' +

      // ① 标题区
      '<div class="city-module-header">' +
        '<div class="city-module-label">' + labelText + '</div>' +
        '<h2 class="city-module-name">' + point.name + '</h2>' +
        '<p class="city-module-desc">' + (point.description || '') + '</p>' +
      '</div>' +

      // ② 主视觉大图
      '<div class="city-hero-wrap"><img class="city-hero-image" src="' + point.heroImage + '" alt="' + point.name + '" loading="lazy"></div>' +

      // ③ 调研区域
      buildSurveyAreas(point.surveyAreas || []) +

      // ④ 非遗项目
      buildHeritageItems(point.heritageItems || []) +

      // ⑤ 实践记录照片墙
      buildPhotoWall(point.practicePhotos || []) +
      buildPracticeInfo(point.practiceInfo) +

      // ⑥ 实践感悟
      buildInsight(point) +

    '</article>';
  }

  function buildSurveyAreas(areas) {
    if (!areas.length) return '';
    return '<div class="section-label">' +
      '<span class="section-label-bar blue"></span>' +
      '<span class="section-label-icon">&#x1f50d;</span>' +
      '<span class="section-label-text">主要调研区域</span>' +
    '</div>' +
    '<div class="survey-grid">' +
      areas.map(function (area) {
        return '<div class="survey-card">' +
          '<div class="survey-card-img-wrap"><img class="survey-card-image" src="' + area.image + '" alt="' + area.name + '" loading="lazy"><div class="survey-card-overlay"></div></div>' +
          '<div class="survey-card-body">' +
            '<div class="survey-card-name">' + area.name + '</div>' +
            '<div class="survey-card-desc">' + area.description + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  function buildHeritageItems(items) {
    if (!items.length) return '';
    return '<div class="section-label">' +
      '<span class="section-label-bar gold"></span>' +
      '<span class="section-label-icon">&#x1f3ad;</span>' +
      '<span class="section-label-text">非物质文化遗产</span>' +
    '</div>' +
    '<div class="heritage-grid">' +
      items.map(function (item) {
        return '<div class="heritage-item">' +
          '<img class="heritage-item-image" src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
          '<div class="heritage-item-body">' +
            '<div class="heritage-item-name">' + item.name + '</div>' +
            '<div class="heritage-item-level">' + item.level + '</div>' +
            '<div class="heritage-item-desc">' + item.description + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  function buildPhotoWall(photos) {
    if (!photos.length) return '';
    var main = photos[0];
    var subs = photos.slice(1);
    return '<div class="section-label">' +
      '<span class="section-label-bar accent"></span>' +
      '<span class="section-label-icon">&#x1f4f7;</span>' +
      '<span class="section-label-text">实践记录</span>' +
    '</div>' +
    '<div class="photo-wall">' +
      '<div class="photo-main">' +
        '<img src="' + main.image + '" alt="' + main.label + '" loading="lazy">' +
        '<div class="photo-label">' + main.label + '</div>' +
      '</div>' +
      subs.map(function (photo) {
        return '<div class="photo-sub">' +
          '<img src="' + photo.image + '" alt="' + photo.label + '" loading="lazy">' +
          '<div class="photo-label">' + photo.label + '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  function buildPracticeInfo(info) {
    if (!info) return '';
    return '<div class="practice-info-bar">' +
      '<span><span class="info-icon">&#x1f3db;</span> ' + info.province + '</span>' +
      '<span><span class="info-icon">&#x1f4cd;</span> ' + info.city + '</span>' +
      '<span><span class="info-icon">&#x1f4c5;</span> ' + info.date + '</span>' +
      '<span><span class="info-icon">&#x1f465;</span> ' + info.teamSize + '</span>' +
    '</div>';
  }

  function buildInsight(point) {
    if (!point.insight) return '';
    var name = point.name || '';
    var insightText = point.insight;
    return '<div class="insight-block">' +
      '<div class="insight-block-header">' +
        '<div class="insight-block-icon">&#x270d;</div>' +
        '<span class="insight-block-title">团队实践感悟</span>' +
      '</div>' +
      '<p class="insight-block-text">' + insightText + '</p>' +
      (name ? '<p class="insight-block-signature">—— ' + name + '实践小组</p>' : '') +
    '</div>';
  }

  // ==================== 省份卡片交互（六宫格） ====================
  function setupTimeline() {
    provinceGrid.addEventListener('click', function (e) {
      var card = e.target.closest('.province-card');
      if (!card) return;
      var key = card.dataset.province;
      if (key && cultureData[key]) {
        loadProvince(key);
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

  // ==================== 城市导航点击 → 平滑滚动 ====================
  function setupCityNavClicks() {
    cityNavList.addEventListener('click', function (e) {
      e.preventDefault();
      var item = e.target.closest('.city-nav-item');
      if (!item) return;
      var cityId = item.dataset.city;
      var target = document.getElementById('city-' + cityId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ==================== 滚动监听 → 高亮当前城市 ====================
  var scrollSpyObserver = null;

  function setupScrollSpy() {
    scrollSpyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var cityId = entry.target.id.replace('city-', '');
          currentCityId = cityId;
          highlightNavItem(cityId);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  }

  function bindScrollSpy() {
    if (!scrollSpyObserver) return;
    scrollSpyObserver.disconnect();
    var modules = cityContent.querySelectorAll('.city-module');
    modules.forEach(function (mod) {
      scrollSpyObserver.observe(mod);
    });
  }

  function highlightNavItem(cityId) {
    var items = cityNavList.querySelectorAll('.city-nav-item');
    items.forEach(function (el) {
      el.classList.remove('active');
      if (el.dataset.city === cityId) {
        el.classList.add('active');
      }
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
          loadProvince(key);
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
