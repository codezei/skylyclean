(function () {
    'use strict';

    function faq () {
      var items = document.querySelectorAll('.question');
      var activeItem = document.querySelector('.question.active');

      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
          if (e.currentTarget !== activeItem && !!activeItem) {
            activeItem.classList.remove('active');
          }

          if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
          } else {
            e.currentTarget.classList.add('active');
            activeItem = e.currentTarget;
          }
        });
      }
    }

    function works () {
      Fancybox.bind(".gallery a", {
        groupAll: true,
        Thumbs: {
          autoStart: true
        },
        Toolbar: {
          display: [{
            id: "counter",
            position: "center"
          }, "zoom", "slideshow", "fullscreen", "download", "close"]
        },
        animated: true,
        dragToClose: true
      });
    }

    function header () {
      var header = document.querySelector('.header');
      var burger = document.querySelector('.js-burger');
      burger.addEventListener('click', function (e) {
        document.documentElement.classList.toggle('open-menu');
        e.currentTarget.setAttribute('aria-expanded', !(e.currentTarget.getAttribute('aria-expanded') === 'true' ? true : false));
      });
      header.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          document.documentElement.classList.remove('open-menu');
          burger.setAttribute('aria-expanded', !(burger.getAttribute('aria-expanded') === 'true' ? true : false));
        }
      });
      var linkNav = document.querySelectorAll('[href^="#"]');
      var headerHeight = 0; // let headerHeight = header.getBoundingClientRect().height

      var V = 0.2;

      for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) {
          e.preventDefault();
          var w = window.pageYOffset;
          var hash = this.href.replace(/[^#]*(.*)/, '$1');
          var tar = document.querySelector(hash);
          var t = tar.getBoundingClientRect().top - headerHeight;
          var start = null;
          requestAnimationFrame(step);

          function step(time) {
            if (start === null) {
              start = time;
            }

            var progress = time - start,
                r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
            window.scrollTo(0, r);

            if (r != w + t) {
              requestAnimationFrame(step);
            } else {
              location.hash = hash;
            }
          }

          if (t > 1 || t < -1) {
            requestAnimationFrame(step);
          }
        }); // gsap.to(".logo span", {
        //     opacity: 0.3,
        //     duration: 0.1,
        //     repeat: 5,
        //     yoyo: true,
        //     ease: "power1.inOut",
        //     onComplete: function() {
        //         gsap.to(".logo span", { opacity: 1, duration: 0.5 });
        //     }
        // });
      }
    }

    function services () {
      var servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          430: {
            slidesPerView: 1.5
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2.5
          },
          1200: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 3.5
          }
        },
        navigation: {
          nextEl: ".services-button-next",
          prevEl: ".services-button-prev"
        }
      });
      var additionalServicesSwiper = new Swiper(".additional-services-swiper", {
        slidesPerView: 1.5,
        spaceBetween: 8,
        breakpoints: {
          430: {
            slidesPerView: 2
          },
          576: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 5
          },
          1400: {
            slidesPerView: 6
          }
        },
        navigation: {
          nextEl: ".additional-services-button-next",
          prevEl: ".additional-services-button-prev"
        }
      });
    }

    function reviews () {
      var reviewsSwiper = new Swiper(".reviews-swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
          430: {
            slidesPerView: 1.5
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        },
        navigation: {
          nextEl: ".reviews-button-next",
          prevEl: ".reviews-button-prev"
        },
        on: {
          transitionEnd: function transitionEnd(swiper) {
            var reviewTextActive = swiper.el.querySelector('.swiper-slide:not(.swiper-slide-active) .review__text.active');

            if (reviewTextActive) {
              reviewTextActive.classList.remove('active');
            }

            var reviewToggleActive = swiper.el.querySelector('.swiper-slide:not(.swiper-slide-active) .review__toggle.active');

            if (reviewToggleActive) {
              reviewToggleActive.classList.remove('active');
            }
          }
        }
      });
      var reviewTogglers = document.querySelectorAll('.review__toggle');

      for (var i = 0; i < reviewTogglers.length; i++) {
        reviewTogglers[i].addEventListener('click', function (e) {
          e.currentTarget.previousElementSibling.classList.toggle('active');
          e.currentTarget.classList.toggle('active');
        });
      }
    }

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;

      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;

          var F = function () {};

          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var normalCompletion = true,
          didErr = false,
          err;
      return {
        s: function () {
          it = o[Symbol.iterator]();
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }

    function cta () {
      var form = document.querySelector('#cta-form');
      if (!form) return;
      var popup = document.querySelector('.popup');
      var popupMessage = document.querySelector('.popup__message');
      form.addEventListener("submit", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var formData, work, _iterator, _step, _step$value, key, value, response, answer;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  formData = new FormData(e.target);
                  work = [];
                  _iterator = _createForOfIteratorHelper(formData.entries());

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];

                      if (key === 'service') {
                        work.push(value);
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  formData.set('service', work.join('; '));
                  _context.prev = 6;
                  _context.next = 9;
                  return fetch('/telegram.php', {
                    method: 'POST',
                    body: formData
                  });

                case 9:
                  response = _context.sent;
                  _context.next = 12;
                  return response.json();

                case 12:
                  answer = _context.sent;
                  popupMessage.innerHTML = answer.message;
                  popup.classList.add('active');
                  setTimeout(function () {
                    popup.classList.remove("active");
                  }, 4000);
                  _context.next = 22;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](6);
                  console.log(_context.t0.message);
                  popup.classList.remove("active");

                case 22:
                  form.reset();

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[6, 18]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    function process () {
      var furnitureSlider = new BeerSlider(document.getElementById("furniture-slider"));
      var mattressSlider = new BeerSlider(document.getElementById("mattress-slider"));
      var carpetSlider = new BeerSlider(document.getElementById("carpet-slider"));
      var windowSlider = new BeerSlider(document.getElementById("window-slider"));
      var salonSlider = new BeerSlider(document.getElementById("salon-slider"));
      var cleaningSlider = new BeerSlider(document.getElementById("cleaning-slider"));
    }

    function accordion () {
      var accordions = document.querySelectorAll('.accordion');

      var _loop = function _loop(a) {
        var items = accordions[a].querySelectorAll('.accordion-item');
        var activeItem = accordions[a].querySelector('.accordion-item.active');

        for (var i = 0; i < items.length; i++) {
          items[i].addEventListener('click', function (e) {
            var button = e.currentTarget.querySelector('.accordion-item__btn');

            if (e.currentTarget !== activeItem && !!activeItem) {
              activeItem.classList.remove('active');
              button.setAttribute('aria-expanded', false);
            }

            if (e.currentTarget.classList.contains('active')) {
              e.currentTarget.classList.remove('active');
              button.setAttribute('aria-expanded', false);
            } else {
              e.currentTarget.classList.add('active');
              button.setAttribute('aria-expanded', true);
              activeItem = e.currentTarget;
            }
          });
        }
      };

      for (var a = 0; a < accordions.length; a++) {
        _loop(a);
      }
    }

    function contacts () {
      var map = document.querySelector(".contacts__iframe");
      var trigger = document.getElementById("contacts");

      function insertMap() {
        var iframe = document.createElement("iframe");
        iframe.className = "contacts__iframe";
        iframe.src = map.dataset.src;
        iframe.width = "640";
        iframe.height = "480";
        iframe.style.border = "0";
        iframe.allowFullscreen = true;
        iframe.name = "CleanTapi";
        map.replaceWith(iframe);
      }

      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              insertMap();
              obs.unobserve(trigger);
            }
          });
        });
        observer.observe(trigger);
      } else {
        insertMap();
        map.replaceWith(iframe);
      }
    }

    function categories () {
      var categoriesNavigation = _toConsumableArray(document.querySelectorAll(".categories-navigation-swiper"));

      var categoriesContent = _toConsumableArray(document.querySelectorAll(".categories-content-swiper"));

      categoriesNavigation.map(function (categoriesNavigationSwiper) {
        var swiper = new Swiper(categoriesNavigationSwiper, {
          spaceBetween: 0,
          slidesPerView: "auto",
          watchSlidesProgress: true,
          slideToClickedSlide: true,
          initialSlide: initialCategory || 0,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          roundLengths: true,
          on: {
            click: function click(swiper) {
              var clickedIndex = swiper.clickedIndex;

              if (clickedIndex !== undefined) {
                swiper.slideTo(clickedIndex);
              }
            }
          }
        });
        return swiper;
      });
      categoriesContent.map(function (categoriesContentSwiper, categoriesContentSwiperIndex) {
        var swiper = new Swiper(categoriesContentSwiper, {
          spaceBetween: 8,
          allowTouchMove: categoriesContentSwiper.dataset.disallowTouch ? false : true,
          slideToClickedSlide: true,
          autoHeight: true,
          watchSlidesProgress: true,
          initialSlide: initialCategory || 0,
          thumbs: {
            swiper: categoriesNavigation[categoriesContentSwiperIndex].swiper,
            multipleActiveThumbs: false
          }
        });
        return swiper;
      });
      categoriesNavigation.forEach(function (categoriesNavigationSwiper, categoriesNavigationSwiperIndex) {
        categoriesNavigationSwiper.swiper.on("slideChange", function (swiper) {
          if (categoriesContent[categoriesNavigationSwiperIndex]) {
            categoriesContent[categoriesNavigationSwiperIndex].swiper.slideTo(swiper.activeIndex);
          }
        });
      });
      categoriesContent.forEach(function (categoriesContentSwiper, categoriesContentSwiperIndex) {
        categoriesContentSwiper.swiper.on("slideChange", function (swiper) {
          if (categoriesNavigation[categoriesContentSwiperIndex]) {
            categoriesNavigation[categoriesContentSwiperIndex].swiper.slideTo(swiper.activeIndex);
          }
        });
      });
    }

    function timer () {
      initializeTimers();
    }

    function initializeTimers() {
      // Находим все элементы таймера на странице
      var timers = document.querySelectorAll('.timer');
      if (!timers.length) return;
      timers.forEach(function (el) {
        return initSingleTimer(el);
      });
    }

    function initSingleTimer(timerEl) {
      // 1. Получаем и парсим конечную дату (deadline)
      var deadlineStr = (timerEl.getAttribute('data-deadline') || '').trim(); // Формат dd.mm.yyyy

      var deadline = parseDDMMYYYY(deadlineStr);

      if (!deadline) {
        console.warn('[timer] Некорректная дата в data-deadline, ожидается dd.mm.yyyy', deadlineStr);
        return;
      } // 2. Устанавливаем конец дня для deadline (23:59:59)


      var endOfDay = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate(), 23, 59, 59, 999); // 3. Запускаем первый "тик"

      tick(timerEl, endOfDay);
    }

    function tick(timerEl, deadline) {
      var now = new Date(); // Вычисляем оставшиеся секунды

      var secondsLeft = Math.max(0, Math.floor((deadline - now) / 1000));
      var different = document.body.classList.contains('timer-different'); // Разложение на дни/часы/минуты/секунды

      var days = Math.floor(secondsLeft / 86400);
      var hours = Math.floor(secondsLeft % 86400 / 3600);
      var minutes = Math.floor(secondsLeft % 3600 / 60);
      var seconds = secondsLeft % 60; // Форматирование с ведущими нулями (кроме дней)

      var dStr = String(days);
      var hStr = hours < 10 ? '0' + hours : String(hours);
      var mStr = minutes < 10 ? '0' + minutes : String(minutes);
      var sStr = seconds < 10 ? '0' + seconds : String(seconds);
      fillUnit(timerEl.getElementsByClassName('days'), dStr, different);
      fillUnit(timerEl.getElementsByClassName('hours'), hStr, different);
      fillUnit(timerEl.getElementsByClassName('minutes'), mStr, different);
      fillUnit(timerEl.getElementsByClassName('seconds'), sStr, different);

      if (secondsLeft <= 0) {
        return; // стоп
      } // Рекурсивный запуск через 1 секунду


      setTimeout(function () {
        return tick(timerEl, deadline);
      }, 1000);
    } // Функции-помощники (fillUnit и parseDDMMYYYY) остаются без изменений


    function fillUnit(nodeList, valueStr, splitDigits) {
      if (!nodeList || !nodeList.length) return;

      if (!splitDigits) {
        for (var i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = valueStr;
        }
      } else {
        var digits = valueStr.split('');

        for (var _i = 0; _i < nodeList.length; _i++) {
          nodeList[_i].innerHTML = digits[_i % digits.length];
        }
      }
    }

    function parseDDMMYYYY(str) {
      var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(str);
      if (!m) return null;
      var dd = +m[1],
          mm = +m[2],
          yyyy = +m[3];
      var d = new Date(yyyy, mm - 1, dd);
      if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd) return null;
      return d;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var runtime_1 = createCommonjsModule(function (module) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;

        var defineProperty = Object.defineProperty || function (obj, key, desc) {
          obj[key] = desc.value;
        };

        var undefined$1; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function (obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
          });
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        });
        defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        });
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          defineProperty(this, "_invoke", {
            value: enqueue
          });
        }

        defineIteratorMethods(AsyncIterator.prototype);
        define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        });
        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per GeneratorResume behavior specified since ES2015:
              // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
              // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method;
          var method = delegate.iterator[methodName];

          if (method === undefined$1) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null; // Note: ["return"] must be used for ES3 parsing compatibility.

            if (methodName === "throw" && delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            if (methodName !== "return") {
              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined$1;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        define(Gp, iteratorSymbol, function () {
          return this;
        });
        define(Gp, "toString", function () {
          return "[object Generator]";
        });

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (val) {
          var object = Object(val);
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined$1;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          }

          throw new TypeError(typeof iterable + " is not iterable");
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined$1,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function (skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined$1;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined$1;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined$1;
                }
              }
            }
          },
          stop: function () {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function (exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined$1;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function (record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined$1;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
       module.exports );

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, in modern engines
        // we can explicitly access globalThis. In older engines we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      header();
      services();
      reviews();
      cta();
      works();
      process();
      accordion();
      categories();
      contacts();
      faq();
      timer();
      AOS.init({
        offset: 80,
        duration: 200,
        easing: 'ease-in',
        once: true
      });
    });

}());
//# sourceMappingURL=main.js.map
