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
    setupCardClicks();
    setupModalEvents();
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
    currentProvinceData = province;
    renderProvinceHeader(province);
    renderCityNav(province);
    renderCityModules(province);
    updateTimelineActive(provinceKey);
    updateQuoteText(provinceKey);
  }

  // ==================== 省份语录映射 ====================
  var provinceQuotes = {
    gansu:     '行走甘肃大地，触摸历史脉络<br>在多元文化中，感受传承的力量。',
    hubei:     '漫步荆楚大地，聆听长江千年回响<br>在诗词歌赋中，汲取文明智慧。',
    neimenggu: '驰骋草原深处，追寻游牧文明记忆<br>在辽阔天地间，感悟生命壮美。',
    xizang:    '登上世界屋脊，朝圣雪域文化净土<br>在信仰光芒中，洗涤心灵尘埃。',
    xinjiang:  '穿越丝路古道，探访西域多元文明<br>在交融共生中，见证文化力量。',
    guangxi:   '行走壮乡山水，聆听八桂山歌悠扬<br>在如画风光中，探寻民族之美。'
  };

  function updateQuoteText(provinceKey) {
    var quoteEl = document.getElementById('nav-quote-text');
    if (quoteEl && provinceQuotes[provinceKey]) {
      quoteEl.innerHTML = provinceQuotes[provinceKey];
    }
  }

  // ==================== 渲染省份标题区 ====================
  function renderProvinceHeader(province) {
    var header = document.getElementById('nav-region-header');
    if (!header) return;
    header.innerHTML =
      '<div class="region-icon">&#x1F4CD;</div>' +
      '<div class="region-title-group">' +
        '<div class="region-name">' + province.name + '</div>' +
        '<div class="region-eng">' + (province.navEng || '') + '</div>' +
      '</div>' +
      '<p class="region-subtitle">' + (province.navSubtitle || province.description || '') + '</p>' +
      '<div class="region-divider"></div>';
  }

  // ==================== 渲染城市导航 ====================
  function renderCityNav(province) {
    cityNavList.innerHTML = province.points.map(function (point, index) {
      var isActive = point.id === currentCityId;
      var num = ('0' + (index + 1)).slice(-2);
      var quote = point.navQuote || '';
      return '<a class="city-nav-item' + (isActive ? ' active' : '') + '" data-city="' + point.id + '" href="#city-' + point.id + '">' +
        '<div class="nav-item-left">' +
          '<div class="nav-item-name">' + point.name + '</div>' +
          (quote ? '<div class="nav-item-desc">' + quote + '</div>' : '') +
        '</div>' +
        '<div class="nav-item-badge">' + num + '</div>' +
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

    var html = '<article class="city-module' + (point.isTeaching ? ' teaching-module' : '') + '" id="city-' + point.id + '">' +

      // ① 标题区
      '<div class="city-module-header">' +
        '<div class="city-module-label">' + labelText + '</div>' +
        '<h2 class="city-module-name">' + point.name + '</h2>' +
        '<p class="city-module-desc">' + (point.description || '') + '</p>' +
      '</div>' +

      // ② 主视觉大图
      '<div class="city-hero-wrap"><img class="city-hero-image" src="' + point.heroImage + '" alt="' + point.name + '" loading="lazy"></div>';

    if (point.isTeaching) {
      html += buildTeachingActivities(point.teachingActivities || [], point.id);
    } else {
      html += buildSurveyAreas(point.surveyAreas || [], point.id) +
        buildHeritageItems(point.heritageItems || [], point.id);
    }

    html += buildPhotoWall(point.practicePhotos || []) +
      buildPracticeInfo(point.practiceInfo) +
      buildInsight(point) +
    '</article>';

    return html;
  }

  function buildSurveyAreas(areas, cityId) {
    if (!areas.length) return '';
    return '<div class="section-label">' +
      '<span class="section-label-bar blue"></span>' +
      '<span class="section-label-icon">&#x1f50d;</span>' +
      '<span class="section-label-text">主要调研区域</span>' +
    '</div>' +
    '<div class="survey-grid">' +
      areas.map(function (area, index) {
        return '<div class="survey-card" data-type="survey" data-city="' + cityId + '" data-index="' + index + '" title="点击查看详情">' +
          '<div class="survey-card-img-wrap"><img class="survey-card-image" src="' + area.image + '" alt="' + area.name + '" loading="lazy"><div class="survey-card-overlay"></div></div>' +
          '<div class="survey-card-body">' +
            '<div class="survey-card-name">' + area.name + '</div>' +
            '<div class="survey-card-desc">' + area.description + '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  function buildHeritageItems(items, cityId) {
    if (!items.length) return '';
    return '<div class="section-label">' +
      '<span class="section-label-bar gold"></span>' +
      '<span class="section-label-icon">&#x1f3ad;</span>' +
      '<span class="section-label-text">非物质文化遗产</span>' +
    '</div>' +
    '<div class="heritage-grid">' +
      items.map(function (item, index) {
        return '<div class="heritage-item" data-type="heritage" data-city="' + cityId + '" data-index="' + index + '" title="点击查看详情">' +
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

  function buildTeachingActivities(activities, cityId) {
    if (!activities.length) return '';
    return '<div class="section-label">' +
      '<span class="section-label-icon">&#x1F4DA;</span>' +
      '<span class="section-label-text">支教课程</span>' +
    '</div>' +
    '<div class="teaching-grid">' +
      activities.map(function (act, index) {
        return '<div class="teaching-card" data-type="teaching" data-city="' + cityId + '" data-index="' + index + '" title="点击查看详情">' +
          '<img class="teaching-card-image" src="' + act.image + '" alt="' + act.name + '" loading="lazy">' +
          '<div class="teaching-card-body">' +
            '<div class="teaching-card-name">' + act.name + '</div>' +
            '<div class="teaching-card-desc">' + act.description + '</div>' +
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

  // ==================== Modal 弹窗 ====================
  var currentProvinceData = null;

  function setupCardClicks() {
    cityContent.addEventListener('click', function (e) {
      var card = e.target.closest('[data-type]');
      if (!card) return;
      var type = card.dataset.type;
      var cityId = card.dataset.city;
      var index = parseInt(card.dataset.index, 10);
      var point = findPointById(cityId);
      if (!point) return;

      var item;
      if (type === 'survey') {
        item = point.surveyAreas && point.surveyAreas[index];
        item._typeLabel = '调研地点';
      } else if (type === 'heritage') {
        item = point.heritageItems && point.heritageItems[index];
        item._typeLabel = item.level || '非遗项目';
      } else if (type === 'teaching') {
        item = point.teachingActivities && point.teachingActivities[index];
        item._typeLabel = '支教课程';
      }
      if (item) openModal(item);
    });
  }

  function findPointById(cityId) {
    if (!currentProvinceData) return null;
    var points = currentProvinceData.points;
    for (var i = 0; i < points.length; i++) {
      if (points[i].id === cityId) return points[i];
    }
    return null;
  }

  function openModal(item) {
    var overlay = document.getElementById('modal-overlay');
    var body = document.getElementById('modal-body');
    if (!overlay || !body) return;

    var hasDetails = item.intro || item.process || item.feeling;

    var html = '<div class="modal-image-wrap"><img class="modal-hero" src="' + item.image + '" alt="' + item.name + '"></div>' +
      '<div class="modal-content">' +
        '<h2 class="modal-title">' + item.name + '</h2>' +
        (item._typeLabel ? '<div class="modal-tag">' + item._typeLabel + '</div>' : '');

    if (hasDetails) {
      if (item.intro) {
        html += '<div class="modal-section">' +
          '<div class="modal-section-header"><span class="modal-section-icon">&#x1F4D6;</span><span class="modal-section-label">介绍</span></div>' +
          '<div class="modal-section-body"><p>' + item.intro + '</p></div>' +
        '</div>';
      }
      if (item.process) {
        html += '<div class="modal-section">' +
          '<div class="modal-section-header"><span class="modal-section-icon">&#x1F50D;</span><span class="modal-section-label">调研过程</span></div>' +
          '<div class="modal-section-body"><p>' + item.process + '</p></div>' +
        '</div>';
      }
      if (item.feeling) {
        html += '<div class="modal-section">' +
          '<div class="modal-section-header"><span class="modal-section-icon">&#x1F4AD;</span><span class="modal-section-label">实践感受</span></div>' +
          '<div class="modal-section-body"><p>' + item.feeling + '</p></div>' +
        '</div>';
      }
    } else {
      html += '<div class="modal-section"><div class="modal-section-body"><p>' + (item.description || '暂无详细信息') + '</p></div></div>';
    }

    html += '</div>';
    body.innerHTML = html;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var overlay = document.getElementById('modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setupModalEvents() {
    var overlay = document.getElementById('modal-overlay');
    var closeBtn = document.getElementById('modal-close');
    if (!overlay) return;

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeModal();
      }
    });
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
