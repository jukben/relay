(self.webpackChunk=self.webpackChunk||[]).push([[48610],{41714:(i,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(67294),n=t(34334),e=t(95999),a=t(88824),o=t(10833),p=t(35281),c=t(39960),_=t(39058),j=t(99703),S=t(90197),l=t(79985);function y(i){var s,t=(s=(0,a.c)().selectMessage,function(i){return s(i,(0,e.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:i}))});return(0,e.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(i.count),tagName:i.label})}function E(i){var s=y(i.tag);return r.createElement(r.Fragment,null,r.createElement(o.d,{title:s}),r.createElement(S.Z,{tag:"blog_tags_posts"}))}function g(i){var s=i.tag,t=i.items,n=i.sidebar,a=i.listMetadata,o=y(s);return r.createElement(_.Z,{sidebar:n},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,o),r.createElement(c.default,{href:s.allTagsPath},r.createElement(e.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement(l.Z,{items:t}),r.createElement(j.Z,{metadata:a}))}function x(i){return r.createElement(o.FG,{className:(0,n.Z)(p.k.wrapper.blogPages,p.k.page.blogTagPostListPage)},r.createElement(E,i),r.createElement(g,i))}},19060:(i,s,t)=>{var r={"./Binary_Property/ASCII.js":468,"./Binary_Property/ASCII_Hex_Digit.js":30585,"./Binary_Property/Alphabetic.js":87099,"./Binary_Property/Any.js":29658,"./Binary_Property/Assigned.js":54949,"./Binary_Property/Bidi_Control.js":3872,"./Binary_Property/Bidi_Mirrored.js":75448,"./Binary_Property/Case_Ignorable.js":46506,"./Binary_Property/Cased.js":8745,"./Binary_Property/Changes_When_Casefolded.js":78717,"./Binary_Property/Changes_When_Casemapped.js":45751,"./Binary_Property/Changes_When_Lowercased.js":28336,"./Binary_Property/Changes_When_NFKC_Casefolded.js":19543,"./Binary_Property/Changes_When_Titlecased.js":4054,"./Binary_Property/Changes_When_Uppercased.js":55703,"./Binary_Property/Dash.js":9921,"./Binary_Property/Default_Ignorable_Code_Point.js":83266,"./Binary_Property/Deprecated.js":7342,"./Binary_Property/Diacritic.js":41814,"./Binary_Property/Emoji.js":93733,"./Binary_Property/Emoji_Component.js":89668,"./Binary_Property/Emoji_Modifier.js":56308,"./Binary_Property/Emoji_Modifier_Base.js":1742,"./Binary_Property/Emoji_Presentation.js":97849,"./Binary_Property/Extended_Pictographic.js":8484,"./Binary_Property/Extender.js":235,"./Binary_Property/Grapheme_Base.js":63830,"./Binary_Property/Grapheme_Extend.js":7763,"./Binary_Property/Hex_Digit.js":90333,"./Binary_Property/IDS_Binary_Operator.js":66897,"./Binary_Property/IDS_Trinary_Operator.js":80227,"./Binary_Property/ID_Continue.js":47899,"./Binary_Property/ID_Start.js":91280,"./Binary_Property/Ideographic.js":7351,"./Binary_Property/Join_Control.js":3124,"./Binary_Property/Logical_Order_Exception.js":14199,"./Binary_Property/Lowercase.js":41614,"./Binary_Property/Math.js":37283,"./Binary_Property/Noncharacter_Code_Point.js":59907,"./Binary_Property/Pattern_Syntax.js":16721,"./Binary_Property/Pattern_White_Space.js":14965,"./Binary_Property/Quotation_Mark.js":28310,"./Binary_Property/Radical.js":80589,"./Binary_Property/Regional_Indicator.js":15913,"./Binary_Property/Sentence_Terminal.js":12665,"./Binary_Property/Soft_Dotted.js":87612,"./Binary_Property/Terminal_Punctuation.js":2417,"./Binary_Property/Unified_Ideograph.js":93403,"./Binary_Property/Uppercase.js":66875,"./Binary_Property/Variation_Selector.js":34215,"./Binary_Property/White_Space.js":13746,"./Binary_Property/XID_Continue.js":84120,"./Binary_Property/XID_Start.js":77268,"./General_Category/Cased_Letter.js":78786,"./General_Category/Close_Punctuation.js":9373,"./General_Category/Connector_Punctuation.js":94585,"./General_Category/Control.js":98619,"./General_Category/Currency_Symbol.js":68873,"./General_Category/Dash_Punctuation.js":7280,"./General_Category/Decimal_Number.js":22865,"./General_Category/Enclosing_Mark.js":37621,"./General_Category/Final_Punctuation.js":12908,"./General_Category/Format.js":71290,"./General_Category/Initial_Punctuation.js":64055,"./General_Category/Letter.js":84258,"./General_Category/Letter_Number.js":53019,"./General_Category/Line_Separator.js":60424,"./General_Category/Lowercase_Letter.js":67142,"./General_Category/Mark.js":2097,"./General_Category/Math_Symbol.js":73362,"./General_Category/Modifier_Letter.js":26244,"./General_Category/Modifier_Symbol.js":89779,"./General_Category/Nonspacing_Mark.js":29516,"./General_Category/Number.js":1177,"./General_Category/Open_Punctuation.js":84538,"./General_Category/Other.js":45763,"./General_Category/Other_Letter.js":14893,"./General_Category/Other_Number.js":12949,"./General_Category/Other_Punctuation.js":58558,"./General_Category/Other_Symbol.js":33752,"./General_Category/Paragraph_Separator.js":7561,"./General_Category/Private_Use.js":58061,"./General_Category/Punctuation.js":1499,"./General_Category/Separator.js":87959,"./General_Category/Space_Separator.js":38917,"./General_Category/Spacing_Mark.js":84104,"./General_Category/Surrogate.js":47026,"./General_Category/Symbol.js":55957,"./General_Category/Titlecase_Letter.js":77076,"./General_Category/Unassigned.js":33829,"./General_Category/Uppercase_Letter.js":60252,"./Script/Adlam.js":43004,"./Script/Ahom.js":59173,"./Script/Anatolian_Hieroglyphs.js":2313,"./Script/Arabic.js":11156,"./Script/Armenian.js":15961,"./Script/Avestan.js":52394,"./Script/Balinese.js":13897,"./Script/Bamum.js":13300,"./Script/Bassa_Vah.js":35042,"./Script/Batak.js":20780,"./Script/Bengali.js":94094,"./Script/Bhaiksuki.js":75180,"./Script/Bopomofo.js":88446,"./Script/Brahmi.js":28519,"./Script/Braille.js":62529,"./Script/Buginese.js":46362,"./Script/Buhid.js":16217,"./Script/Canadian_Aboriginal.js":95139,"./Script/Carian.js":49698,"./Script/Caucasian_Albanian.js":3502,"./Script/Chakma.js":53002,"./Script/Cham.js":21420,"./Script/Cherokee.js":86e3,"./Script/Chorasmian.js":93014,"./Script/Common.js":87228,"./Script/Coptic.js":68541,"./Script/Cuneiform.js":34477,"./Script/Cypriot.js":90837,"./Script/Cypro_Minoan.js":64477,"./Script/Cyrillic.js":49289,"./Script/Deseret.js":56903,"./Script/Devanagari.js":73099,"./Script/Dives_Akuru.js":41115,"./Script/Dogra.js":90729,"./Script/Duployan.js":92245,"./Script/Egyptian_Hieroglyphs.js":6867,"./Script/Elbasan.js":47850,"./Script/Elymaic.js":71879,"./Script/Ethiopic.js":36960,"./Script/Georgian.js":20117,"./Script/Glagolitic.js":19951,"./Script/Gothic.js":92671,"./Script/Grantha.js":40496,"./Script/Greek.js":13254,"./Script/Gujarati.js":60772,"./Script/Gunjala_Gondi.js":26755,"./Script/Gurmukhi.js":93493,"./Script/Han.js":27150,"./Script/Hangul.js":85357,"./Script/Hanifi_Rohingya.js":3608,"./Script/Hanunoo.js":23695,"./Script/Hatran.js":4326,"./Script/Hebrew.js":28625,"./Script/Hiragana.js":25016,"./Script/Imperial_Aramaic.js":39193,"./Script/Inherited.js":89510,"./Script/Inscriptional_Pahlavi.js":46551,"./Script/Inscriptional_Parthian.js":96560,"./Script/Javanese.js":6345,"./Script/Kaithi.js":96423,"./Script/Kannada.js":59606,"./Script/Katakana.js":55098,"./Script/Kayah_Li.js":65973,"./Script/Kharoshthi.js":82173,"./Script/Khitan_Small_Script.js":58400,"./Script/Khmer.js":71427,"./Script/Khojki.js":49171,"./Script/Khudawadi.js":71871,"./Script/Lao.js":6412,"./Script/Latin.js":47588,"./Script/Lepcha.js":63009,"./Script/Limbu.js":3404,"./Script/Linear_A.js":41488,"./Script/Linear_B.js":34578,"./Script/Lisu.js":29637,"./Script/Lycian.js":54232,"./Script/Lydian.js":56741,"./Script/Mahajani.js":48927,"./Script/Makasar.js":68054,"./Script/Malayalam.js":10027,"./Script/Mandaic.js":77013,"./Script/Manichaean.js":79456,"./Script/Marchen.js":40125,"./Script/Masaram_Gondi.js":95323,"./Script/Medefaidrin.js":72924,"./Script/Meetei_Mayek.js":41773,"./Script/Mende_Kikakui.js":25878,"./Script/Meroitic_Cursive.js":7476,"./Script/Meroitic_Hieroglyphs.js":11633,"./Script/Miao.js":38653,"./Script/Modi.js":54400,"./Script/Mongolian.js":16356,"./Script/Mro.js":20191,"./Script/Multani.js":52974,"./Script/Myanmar.js":57487,"./Script/Nabataean.js":77128,"./Script/Nandinagari.js":92517,"./Script/New_Tai_Lue.js":61859,"./Script/Newa.js":13251,"./Script/Nko.js":44460,"./Script/Nushu.js":27539,"./Script/Nyiakeng_Puachue_Hmong.js":9433,"./Script/Ogham.js":32613,"./Script/Ol_Chiki.js":46527,"./Script/Old_Hungarian.js":41172,"./Script/Old_Italic.js":67605,"./Script/Old_North_Arabian.js":39289,"./Script/Old_Permic.js":10363,"./Script/Old_Persian.js":94403,"./Script/Old_Sogdian.js":59859,"./Script/Old_South_Arabian.js":16857,"./Script/Old_Turkic.js":91282,"./Script/Old_Uyghur.js":2506,"./Script/Oriya.js":38013,"./Script/Osage.js":47009,"./Script/Osmanya.js":80675,"./Script/Pahawh_Hmong.js":34317,"./Script/Palmyrene.js":60093,"./Script/Pau_Cin_Hau.js":5010,"./Script/Phags_Pa.js":47097,"./Script/Phoenician.js":59191,"./Script/Psalter_Pahlavi.js":88274,"./Script/Rejang.js":78623,"./Script/Runic.js":5652,"./Script/Samaritan.js":79205,"./Script/Saurashtra.js":35536,"./Script/Sharada.js":26532,"./Script/Shavian.js":66908,"./Script/Siddham.js":60607,"./Script/SignWriting.js":20730,"./Script/Sinhala.js":50236,"./Script/Sogdian.js":78599,"./Script/Sora_Sompeng.js":85856,"./Script/Soyombo.js":8649,"./Script/Sundanese.js":55688,"./Script/Syloti_Nagri.js":12975,"./Script/Syriac.js":20405,"./Script/Tagalog.js":1997,"./Script/Tagbanwa.js":36393,"./Script/Tai_Le.js":92134,"./Script/Tai_Tham.js":73364,"./Script/Tai_Viet.js":3830,"./Script/Takri.js":78379,"./Script/Tamil.js":35094,"./Script/Tangsa.js":5193,"./Script/Tangut.js":30576,"./Script/Telugu.js":31870,"./Script/Thaana.js":97909,"./Script/Thai.js":41546,"./Script/Tibetan.js":316,"./Script/Tifinagh.js":36086,"./Script/Tirhuta.js":46509,"./Script/Toto.js":66058,"./Script/Ugaritic.js":44226,"./Script/Vai.js":4948,"./Script/Vithkuqi.js":65684,"./Script/Wancho.js":49339,"./Script/Warang_Citi.js":38873,"./Script/Yezidi.js":46152,"./Script/Yi.js":46330,"./Script/Zanabazar_Square.js":12522,"./Script_Extensions/Adlam.js":5849,"./Script_Extensions/Ahom.js":8478,"./Script_Extensions/Anatolian_Hieroglyphs.js":82625,"./Script_Extensions/Arabic.js":21067,"./Script_Extensions/Armenian.js":59323,"./Script_Extensions/Avestan.js":56692,"./Script_Extensions/Balinese.js":79467,"./Script_Extensions/Bamum.js":82462,"./Script_Extensions/Bassa_Vah.js":55370,"./Script_Extensions/Batak.js":60823,"./Script_Extensions/Bengali.js":47077,"./Script_Extensions/Bhaiksuki.js":14634,"./Script_Extensions/Bopomofo.js":83931,"./Script_Extensions/Brahmi.js":38771,"./Script_Extensions/Braille.js":46678,"./Script_Extensions/Buginese.js":70003,"./Script_Extensions/Buhid.js":68246,"./Script_Extensions/Canadian_Aboriginal.js":99887,"./Script_Extensions/Carian.js":84847,"./Script_Extensions/Caucasian_Albanian.js":34251,"./Script_Extensions/Chakma.js":69108,"./Script_Extensions/Cham.js":46794,"./Script_Extensions/Cherokee.js":33505,"./Script_Extensions/Chorasmian.js":38186,"./Script_Extensions/Common.js":42259,"./Script_Extensions/Coptic.js":53775,"./Script_Extensions/Cuneiform.js":70982,"./Script_Extensions/Cypriot.js":45920,"./Script_Extensions/Cypro_Minoan.js":74147,"./Script_Extensions/Cyrillic.js":81254,"./Script_Extensions/Deseret.js":4063,"./Script_Extensions/Devanagari.js":24172,"./Script_Extensions/Dives_Akuru.js":13822,"./Script_Extensions/Dogra.js":24862,"./Script_Extensions/Duployan.js":25310,"./Script_Extensions/Egyptian_Hieroglyphs.js":2162,"./Script_Extensions/Elbasan.js":95189,"./Script_Extensions/Elymaic.js":93541,"./Script_Extensions/Ethiopic.js":59271,"./Script_Extensions/Georgian.js":47646,"./Script_Extensions/Glagolitic.js":35643,"./Script_Extensions/Gothic.js":34663,"./Script_Extensions/Grantha.js":57627,"./Script_Extensions/Greek.js":97324,"./Script_Extensions/Gujarati.js":32560,"./Script_Extensions/Gunjala_Gondi.js":52777,"./Script_Extensions/Gurmukhi.js":26362,"./Script_Extensions/Han.js":9316,"./Script_Extensions/Hangul.js":26776,"./Script_Extensions/Hanifi_Rohingya.js":71213,"./Script_Extensions/Hanunoo.js":59257,"./Script_Extensions/Hatran.js":71190,"./Script_Extensions/Hebrew.js":49927,"./Script_Extensions/Hiragana.js":41384,"./Script_Extensions/Imperial_Aramaic.js":40263,"./Script_Extensions/Inherited.js":69706,"./Script_Extensions/Inscriptional_Pahlavi.js":99170,"./Script_Extensions/Inscriptional_Parthian.js":84635,"./Script_Extensions/Javanese.js":41755,"./Script_Extensions/Kaithi.js":84257,"./Script_Extensions/Kannada.js":61374,"./Script_Extensions/Katakana.js":10369,"./Script_Extensions/Kayah_Li.js":48555,"./Script_Extensions/Kharoshthi.js":77584,"./Script_Extensions/Khitan_Small_Script.js":50865,"./Script_Extensions/Khmer.js":53446,"./Script_Extensions/Khojki.js":90059,"./Script_Extensions/Khudawadi.js":794,"./Script_Extensions/Lao.js":48534,"./Script_Extensions/Latin.js":86631,"./Script_Extensions/Lepcha.js":84994,"./Script_Extensions/Limbu.js":47409,"./Script_Extensions/Linear_A.js":39001,"./Script_Extensions/Linear_B.js":83725,"./Script_Extensions/Lisu.js":71939,"./Script_Extensions/Lycian.js":29625,"./Script_Extensions/Lydian.js":68809,"./Script_Extensions/Mahajani.js":16998,"./Script_Extensions/Makasar.js":51797,"./Script_Extensions/Malayalam.js":69534,"./Script_Extensions/Mandaic.js":23573,"./Script_Extensions/Manichaean.js":56202,"./Script_Extensions/Marchen.js":1694,"./Script_Extensions/Masaram_Gondi.js":42673,"./Script_Extensions/Medefaidrin.js":68226,"./Script_Extensions/Meetei_Mayek.js":54312,"./Script_Extensions/Mende_Kikakui.js":17484,"./Script_Extensions/Meroitic_Cursive.js":22089,"./Script_Extensions/Meroitic_Hieroglyphs.js":71845,"./Script_Extensions/Miao.js":54606,"./Script_Extensions/Modi.js":95643,"./Script_Extensions/Mongolian.js":37763,"./Script_Extensions/Mro.js":27091,"./Script_Extensions/Multani.js":40083,"./Script_Extensions/Myanmar.js":4110,"./Script_Extensions/Nabataean.js":73147,"./Script_Extensions/Nandinagari.js":59241,"./Script_Extensions/New_Tai_Lue.js":3150,"./Script_Extensions/Newa.js":50645,"./Script_Extensions/Nko.js":19291,"./Script_Extensions/Nushu.js":73190,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":69168,"./Script_Extensions/Ogham.js":4475,"./Script_Extensions/Ol_Chiki.js":13556,"./Script_Extensions/Old_Hungarian.js":29656,"./Script_Extensions/Old_Italic.js":9941,"./Script_Extensions/Old_North_Arabian.js":87237,"./Script_Extensions/Old_Permic.js":5280,"./Script_Extensions/Old_Persian.js":29057,"./Script_Extensions/Old_Sogdian.js":360,"./Script_Extensions/Old_South_Arabian.js":64174,"./Script_Extensions/Old_Turkic.js":86511,"./Script_Extensions/Old_Uyghur.js":96843,"./Script_Extensions/Oriya.js":53646,"./Script_Extensions/Osage.js":5061,"./Script_Extensions/Osmanya.js":47640,"./Script_Extensions/Pahawh_Hmong.js":82658,"./Script_Extensions/Palmyrene.js":55297,"./Script_Extensions/Pau_Cin_Hau.js":84374,"./Script_Extensions/Phags_Pa.js":69587,"./Script_Extensions/Phoenician.js":14401,"./Script_Extensions/Psalter_Pahlavi.js":59594,"./Script_Extensions/Rejang.js":689,"./Script_Extensions/Runic.js":90518,"./Script_Extensions/Samaritan.js":70331,"./Script_Extensions/Saurashtra.js":90860,"./Script_Extensions/Sharada.js":12215,"./Script_Extensions/Shavian.js":77430,"./Script_Extensions/Siddham.js":4401,"./Script_Extensions/SignWriting.js":97177,"./Script_Extensions/Sinhala.js":71284,"./Script_Extensions/Sogdian.js":46494,"./Script_Extensions/Sora_Sompeng.js":8287,"./Script_Extensions/Soyombo.js":52073,"./Script_Extensions/Sundanese.js":90581,"./Script_Extensions/Syloti_Nagri.js":20820,"./Script_Extensions/Syriac.js":71298,"./Script_Extensions/Tagalog.js":35997,"./Script_Extensions/Tagbanwa.js":38586,"./Script_Extensions/Tai_Le.js":95164,"./Script_Extensions/Tai_Tham.js":18393,"./Script_Extensions/Tai_Viet.js":40829,"./Script_Extensions/Takri.js":4997,"./Script_Extensions/Tamil.js":25143,"./Script_Extensions/Tangsa.js":94747,"./Script_Extensions/Tangut.js":2876,"./Script_Extensions/Telugu.js":63853,"./Script_Extensions/Thaana.js":47023,"./Script_Extensions/Thai.js":8687,"./Script_Extensions/Tibetan.js":168,"./Script_Extensions/Tifinagh.js":12247,"./Script_Extensions/Tirhuta.js":50857,"./Script_Extensions/Toto.js":38924,"./Script_Extensions/Ugaritic.js":52063,"./Script_Extensions/Vai.js":34670,"./Script_Extensions/Vithkuqi.js":76698,"./Script_Extensions/Wancho.js":37055,"./Script_Extensions/Warang_Citi.js":26580,"./Script_Extensions/Yezidi.js":18059,"./Script_Extensions/Yi.js":98617,"./Script_Extensions/Zanabazar_Square.js":81922,"./index.js":13290,"./unicode-version.js":51899};function n(i){var s=e(i);return t(s)}function e(i){if(!t.o(r,i)){var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}return r[i]}n.keys=function(){return Object.keys(r)},n.resolve=e,i.exports=n,n.id=19060}}]);