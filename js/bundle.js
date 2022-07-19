$(document).ready(function(){

        $(document).on('click', '.header-burger', function(){
            $(this).toggleClass('active');
            $('.header').toggleClass('active');
            $('.header-nav').toggleClass('active');
            $('body').toggleClass('scroll')
        })
})



/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

var demoJson = {
	"demo": {
		"title": {
			"pt": "Видео и фото съемка в Таллинне",
			"ru": "Видео и фото съемка в Таллинне",
			"en": "Video and photography in Tallinn"
		},
		"text": {
			"pt": "Este exemplo serve apenas para ilustrar os diferentes tipos de atributos de texto que podem ser localizados no cliente com a ajuda do i18n.js",
			"en": "This demo's only purpose is to show the different text attributes that can be localized with the help of i18n.js",
			"es": "Si i18n.js era español entonces sería de puta madre. Ahora así, la han cagado!"
		},
        "header": {
            "logo": {
                "ru": "Тамара Касе",
                "en": "Tamara Kase",
            },
            "nav-1": {
                "ru": "Портфолио",
                "en": "Portfolio",
            },
            "nav-2": {
                "ru": "Стоимость",
                "en": "Price",
            },
            "nav-3": {
                "ru": "Обо мне",
                "en": "About Me",
            },
            "nav-4": {
                "ru": "Контакы",
                "en": "Contacts",
            }
        },
        "button": {
            "ru": "Смотреть портфолио",
            "en": "View portfolio"
        },
        "adv": {
            "experiense": {
                "ru": "Лет опыта",
                "en": "Years experience"
            },
            "clients":{
                "ru": "Клиентов выбрали меня",
                "en": "Сlients chose me"
            },
            "session":{
                "ru": "Успешных фотосессий",
                "en": "Successful photo sessions"
            },
            "moments":{
                "ru": "Запечетлено моментов",
                "en": "Сaptured moments"
            }
        },
        "titles":{
            "works":{
                "ru": "Мои работы",
                "en": "My works"
            },
            "about":{
                "ru": "Обо мне",
                "en": "About Me"
            },
            "price": {
                "ru": "Стоимость",
                "en": "Price"
            },
            "order": {
                "ru":"Записаться на фотосессию",
                "en": "Sign up for a photo shoot"
            }
        },
        "filter": {
            "all": {
                "ru": "Все",
                "en": "All"
            },
            "family": {
                "ru": "Семейная съемка",
                "en": "Family shooting"
            },
            "bday": {
                "ru": "День рождения",
                "en": "Birthday"
            },
            "extract": {
                "ru": "Выписка, крещение",
                "en": "Extract, epiphany"
            },
            "wedding": {
                "ru": "Свадьба",
                "en": "Wedding"
            },
            "other": {
                "ru": "Другое",
                "en": "Other"
            },
            "video": {
                "ru": "Видео",
                "en": "Video"
            },
        },
        "price": {
            "family": {
                "ru": "Семейная съемка",
                "en": "Family shooting"
            },
            "bday": {
                "ru": "День рождения",
                "en": "Birthday"
            },
            "extract": {
                "ru": "Выписка, крещение",
                "en": "Extract, epiphany"
            },
            "wedding": {
                "ru": "Свадьба",
                "en": "Wedding"
            },
            "other": {
                "ru": "Другое",
                "en": "Other"
            },
            "video": {
                "ru": "Промо ролики",
                "en": "Promo videos"
            },
            "one": {
                "ru": "1 час - X Euro",
                "en": "1 hour - X Euro"
            },
            "two": {
                "ru": "2 часа - X Euro",
                "en": "2 hours - X Euro"
            },
            "three": {
                "ru": "3 часа - X Euro",
                "en": "3 hours - X Euro"
            },
        },
        "about": {
            "paragraph": {
                "one" : {
                    "ru": "Привет!",
                    "en": "Hi!"
                },
                "two" : {
                    "ru": "Меня зовут Олег Дудко. Я профессиональный фотограф из Москвы. Моя специализация – съемка эмоционального портрета. ",
                    "en": "My name is Oleg Dudko. I am a professional photographer from Moscow. My specialty is shooting an emotional portrait."
                },
                "three" : {
                    "ru": "Часть моих работ можно посмотреть тут же на сайте в разделе Портфолио, причем на ВСЕХ снимках там самые обычные люди. Большинство из них пришли на фотосессию в студии первый раз в жизни. Многие снимки черно-белые, потому что, на мой взгляд, они выразительнее и лучше раскрывают внутренний мир человека. Но клиент всегда получает оба варианта - цветной и черно-белый.",
                    "en": "Some of my works can be viewed right there on the website in the Portfolio section, and in ALL the pictures there are the most ordinary people. Most of them came to a photo shoot in the studio for the first time in their lives. Many pictures are black and white, because, in my opinion, they are more expressive and better reveal the inner world of a person. But the client always gets both options - color and black and white."
                },
                "four" : {
                    "ru": "Меня зовут Олег Дудко. Я профессиональный фотограф из Москвы. Моя специализация – съемка эмоционального портрета. ",
                    "en": "My name is Oleg Dudko. I am a professional photographer from Moscow. My specialty is shooting an emotional portrait."
                }
            }
        },
        "request": {
            "en":"To sign up for a photo shoot, call XXXXXXXX write to or contact me via instagram.",
            "ru":"Чтобы записаться на фотосессию позвоните по номеру ХХХХХХХХ  напишите на mail@ewrwe.com или свяжитесь со мной через инстаграм."
        },
        "links": {
            "phone": {
                "ru":"Телефон: (+372) 610 6500",
                "en":"Call: (+372) 610 6500"
            },
 
        }
        
	}
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'ru';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').text(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {
    

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #russian').addClass('selected');
	
	$('.lang-picker._en').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker._ru').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker').removeClass('selected');
		picker.addClass('selected');
	}
});

$("._link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    $('body').removeClass('scroll');
});

$(".gallery-filter__item").eq(0).addClass("active");
$(".gallery-content").hide();
$(".gallery-content").eq(0).fadeIn();

$(".gallery-filter__item").click(function() {
	$(".gallery-filter__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".gallery-content").hide().eq($(this).index()).fadeIn()
})


