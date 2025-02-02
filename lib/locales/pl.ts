import { Locale } from '../types/locale';

export const locale: Locale = {
  key: 'pl',

  seasons: {
    advent: {
      season: 'Adwent',
      weekday: '$t(weekdays:{{dow}}, capitalize) {{week}}. tygodnia Adwentu',
      sunday: '{{week}}. Niedziela Adwentu',
      privileged_weekday: '{{day}} $t(months:11)',
    },

    christmas_time: {
      season: 'Narodzenie Pańskie',
      day: '$t(weekdays:{{dow}}, capitalize) boże Narodzenie',
      octave: '{{count}}. dzień w oktawie Narodzenia Pańskiego',
      second_sunday_after_christmas: 'Druga Niedziela po Narodzeniu Pańskim',
      before_epiphany: '{{day}} $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}, capitalize) po Objawieniu Pańskim',
    },

    ordinary_time: {
      season: 'Okres Zwykły',
      weekday: '$t(weekdays:{{dow}}, capitalize) {{week}}. tygodnia zwykłego',
      sunday: '{{week}}. Niedziela zwykła',
    },

    lent: {
      season: 'Wielki Post',
      weekday: '$t(weekdays:{{dow}}, capitalize) {{week}}. tygodnia Wielkiego Postu',
      sunday: '{{week}}. Niedziela Wielkiego Postu',
      day_after_ash_wed: '$t(weekdays:{{dow}}, capitalize) po Popielcu',
      holy_week_day: '$t(weekdays:{{dow}}, capitalize) Wielkiego Tygodnia',
    },

    paschal_triduum: {
      season: 'Triduum Paschalne',
    },

    easter_time: {
      season: 'Wielkanoc',
      weekday: '$t(weekdays:{{dow}}, capitalize) {{week}}. tygodnia wielkanocnego',
      sunday: '{{week}}. Niedziela Wielkanocna',
      octave: '$t(weekdays:{{dow}}, capitalize) w oktawie Wielkanocy',
    },
  },

  periods: {
    epiphany: 'Objawienie Pańskie',
    holy_week: 'Wielki Tydzień',
  },

  ranks: {
    solemnity: 'uroczystość',
    sunday: 'niedziela',
    feast: 'święto',
    memorial: 'wspomnienie obowiązkowe',
    weekday: 'dzień powszedni',
  },

  weekdays: {
    0: 'niedziela',
    1: 'poniedziałek',
    2: 'wtorek',
    3: 'środa',
    4: 'czwartek',
    5: 'piątek',
    6: 'sobota',
  },

  months: {
    0: 'stycznia',
    1: 'lutego',
    2: 'marca',
    3: 'kwietnia',
    4: 'maja',
    5: 'czerwca',
    6: 'lipca',
    7: 'sierpnia',
    8: 'września',
    9: 'października',
    10: 'listopada',
    11: 'grudnia',
  },

  colors: {
    black: 'czarny',
    gold: 'złoty',
    green: 'zielony',
    purple: 'fioletowy',
    red: 'czerwony',
    rose: 'różowy',
    white: 'biały',
  },

  names: {
    all_saints: 'Wszystkich Świętych',
    annunciation: 'Zwiastowanie Pańskie',
    ascension: 'Wniebowstąpienie Pańskie',
    ash_wednesday: 'Środa Popielcowa',
    assumption: 'Wniebowzięcie Najświętszej Maryi Panny',
    baptism_of_the_lord: 'Chrzest Pański',
    christ_the_king_sunday: 'Jezusa Chrystusa Króla Wszechświata',
    christmas: 'Narodzenie Pańskie',
    corpus_christi: 'Najświętszego Ciała i Krwi Chrystusa',
    divine_mercy_sunday: '2 Niedziela Wielkanocna czyli Miłosierdzia Bożego',
    easter_sunday: 'Niedziela Wielkanocna Zmartwychwstania Pańskiego',
    epiphany: 'Objawienie Pańskie',
    exaltation_of_the_holy_cross: 'Podwyższenie Krzyża Świętego',
    good_friday: 'Wielki Piątek',
    holy_family: 'Świętej Rodziny Jezusa, Maryi i Józefa',
    holy_saturday: 'Wielka Sobota',
    holy_thursday: 'Wielki Czwartek',
    immaculate_conception_of_mary: 'Niepokalane Poczęcie Najświętszej Maryi Panny',
    immaculate_heart_of_mary: 'Niepokalanego Serca Najświętszej Maryi Panny',
    joseph_spouse_of_mary: 'Św. Józefa, Oblubieńca Najświętszej Maryi Panny',
    mary_mother_of_god: 'Świętej Bożej Rodzicielki Maryi',
    most_sacred_heart_of_jesus: 'Najświętszego Serca Pana Jezusa',
    nativity_of_john_the_baptist: 'Narodzenie św. Jana Chrzciciela',
    palm_sunday: 'Niedziela Palmowa Męki Pańskiej',
    pentecost_sunday: 'Niedziela Zesłania Ducha Świętego',
    peter_and_paul_apostles: 'Świętych Apostołów Piotra i Pawła',
    presentation_of_the_lord: 'Ofiarowanie Pańskie',
    thursday_of_the_lord_s_supper: '$(names:holy_thursday)',
    transfiguration: 'Przemienienie Pańskie',
    trinity_sunday: 'Najświętszej Trójcy',
    adalbert_of_prague_bishop: 'Św. Wojciecha, biskupa i męczennika',
    adalbert_of_prague_bishop_patron_of_poland: 'Św. Wojciecha, biskupa i męczennika, głównego patrona Polski',
    agatha_of_sicily_virgin: 'Św. Agaty, dziewicy i męczennicy',
    agnes_cao_guiying_martyr: 'Św. Agnieszki Cao Guiying, męczennicy',
    agnes_of_rome_virgin: 'Św. Agnieszki, dziewicy i męczennicy',
    alberic_crescitelli_priest: 'Św. Alberyka Crescitellego, prezbitera i męczennika',
    albert_chmielowski_religious: 'Św. Brata Alberta Chmielowskiego, zakonnika',
    albert_the_great_bishop: 'Św. Alberta Wielkiego, biskupa i doktora Kościoła',
    all_souls: 'Wspomnienie wszystkich wiernych zmarłych',
    aloysius_gonzaga_religious: 'Św. Alojzego Gonzagi, zakonnika',
    aloysius_versiglia_bishop_and_callistus_caravario_priest_martyrs:
      'Świętych Alojzego Versiglii, biskupa i Kaliksta Caravaria, prezbitera',
    alphonsus_liguori_bishop: 'Św. Alfonsa Marii Liguoriego, biskupa i doktora Kościoła',
    ambrose_of_milan_bishop: 'Św. Ambrożego, biskupa i doktora Kościoła',
    andrew_apostle: 'Św. Andrzeja, Apostoła',
    andrew_apostle_patron_of_scotland: 'Św. Andrzeja, Apostoła, patrona Szkocji',
    andrew_bobola_priest: 'Św. Andrzeja Boboli, prezbitera i męczennika, patrona Polski',
    andrew_dung_lac_priest_and_companions_martyrs: 'Świętych męczenników Andrzeja Dung-Lac, prezbitera, i Towarzyszy',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Świętych męczenników Andrzeja Kim Taegon, prezbitera, Pawła Chong Hasang i Towarzyszy',
    andrew_zorard_of_nitra_and_benedict_of_skalka_hermits: 'Świętych pustelników Andrzeja Świerada i Benedykta',
    angela_merici_virgin: 'Św. Anieli Merici, dziewicy',
    angela_salawa_virgin: 'Bł. Anieli Salawy, dziewicy',
    anselm_of_canterbury_bishop: 'Św. Anzelma, biskupa i doktora Kościoła',
    ansgar_of_hamburg_bishop: 'Św. Oskara, biskupa',
    anthony_julian_nowowiejski_bishop_and_companions_martyrs:
      'Błogosławionych męczenników Antoniego Juliana Nowowiejskiego, biskupa, i Towarzyszy',
    anthony_mary_claret_bishop: 'Św. Antoniego Marii Clareta, biskupa',
    anthony_of_egypt_abbot: 'Św. Antoniego, opata',
    anthony_of_padua_priest: 'Św. Antoniego z Padwy, prezbitera i doktora Kościoła',
    anthony_zaccaria_priest: 'Św. Antoniego Marii Zaccarii, prezbitera',
    apollinaris_of_ravenna_bishop: 'Św. Apolinarego, biskupa i męczennika',
    athanasius_of_alexandria_bishop: 'Św. Atanazego, biskupa i doktora Kościoła',
    augustine_of_canterbury_bishop: 'Św. Augustyna z Canterbury, biskupa',
    augustine_of_hippo_bishop: 'Św. Augustyna, biskupa i doktora Kościoła',
    augustine_zhao_rong_priest: 'Św. Augustyna Zhao Rong, prezbitera i męczennika',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Świętych męczenników Augustyna Zhao Rong, prezbitera, i Towarzyszy',
    barbara_of_heliopolis_virgin: 'Św. Barbary, dziewicy i męczennicy',
    barnabas_apostle: 'Św. Barnaby, Apostoła',
    bartholomew_apostle: 'Św. Bartłomieja, Apostoła',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Świętych Bazylego Wielkiego i Grzegorza z Nazjanzu, biskupów i doktorów Kościoła',
    bede_the_venerable_priest: 'Św. Bedy Czcigodnego, prezbitera i doktora Kościoła',
    benedict_of_nursia_abbot: 'Św. Benedykta, opata',
    benedict_of_nursia_abbot_patron_of_europe: 'Św. Benedykta, opata, patrona Europy',
    bernard_of_clairvaux_abbot: 'Św. Bernarda, opata i doktora Kościoła',
    bernardine_of_siena_priest: 'Św. Bernardyna ze Sieny, prezbitera',
    blaise_of_sebaste_bishop: 'Św. Błażeja, biskupa i męczennika',
    bogumilus_of_dobrow_bishop: 'Bł. Bogumiła, biskupa',
    boleslawa_mary_lament_virgin: 'Bł. Bolesławy Marii Lament, dziewicy',
    bonaventure_of_bagnoregio_bishop: 'Św. Bonawentury, biskupa i doktora Kościoła',
    boniface_of_mainz_bishop: 'Św. Bonifacego, biskupa i męczennika',
    bridget_of_sweden_religious: 'Św. Brygidy, zakonnicy',
    bridget_of_sweden_religious_copatroness_of_europe: 'Św. Brygidy, zakonnicy, patronki Europy',
    bronislava_of_poland_virgin: 'Bł. Bronisławy, dziewicy',
    bruno_of_cologne_priest: 'Św. Brunona, prezbitera',
    bruno_of_querfurt_bishop: 'Św. Brunona Bonifacego z Kwerfurtu, biskupa i męczennika',
    cajetan_of_thiene_priest: 'Św. Kajetana, prezbitera',
    callistus_i_pope: 'Św. Kaliksta I, papieża i męczennika',
    camillus_de_lellis_priest: 'Św. Kamila de Lellis, prezbitera',
    caroline_kozka_virgin: 'Bł. Karoliny Kózkówny, dziewicy i męczennicy',
    casimir_of_poland: 'Św. Kazimierza, królewicza',
    catherine_of_alexandria_virgin: 'Św. Katarzyny Aleksandryjskiej, dziewicy i męczennicy',
    catherine_of_siena_virgin: 'Św. Katarzyny Sieneńskiej, dziewicy i doktora Kościoła',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Św. Katarzyny Sieneńskiej, dziewicy i doktora Kościoła, patronki Europy',
    catherine_of_siena_virgin_copatroness_of_italy_and_europe:
      'Św. Katarzyny Sieneńskiej, dziewicy i doktora Kościoła, patronki Włoch i Europy',
    cecilia_of_rome_virgin: 'Św. Cecylii, dziewicy i męczennicy',
    ceslaus_of_poland_priest: 'Bł. Czesława, prezbitera',
    chair_of_saint_peter_the_apostle: 'Katedry św. Piotra, Apostoła',
    charles_borromeo_bishop: 'Św. Karola Boromeusza, biskupa',
    charles_lwanga_and_companions_martyrs: 'Świętych męczenników Karola Lwangi i Towarzyszy',
    christopher_magallanes_priest_and_companions_martyrs:
      'Świętych męczenników Krzysztofa Magallanesa, prezbitera, i Towarzyszy',
    clare_of_assisi_virgin: 'Św. Klary, dziewicy',
    clement_i_pope: 'Św. Klemensa I, papieża i męczennika',
    columba_of_iona_abbot: 'Św. Kolumbana, zakonnika',
    columba_of_iona_abbot_copatron_of_ireland: 'Św. Kolumbana, zakonnika, patrona Irlandii',
    conversion_of_saint_paul_the_apostle: 'Nawrócenie św. Pawła, Apostoła',
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Świętych męczenników Korneliusza, papieża, i Cypriana, biskupa',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Świętych męczenników Kosmy i Damiana',
    cyril_of_alexandria_bishop: 'Św. Cyryla Aleksandryjskiego, biskupa i doktora Kościoła',
    cyril_of_jerusalem_bishop: 'Św. Cyryla Jerozolimskiego, biskupa i doktora Kościoła',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: 'Świętych Cyryla, mnicha i Metodego, biskupa',
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe:
      'Świętych Cyryla, mnicha i Metodego, biskupa, patronów Europy',
    damasus_i_pope: 'Św. Damazego I, papieża',
    dedication_of_consecrated_churches: 'Rocznica poświęcenia kościoła własnego',
    dedication_of_the_basilica_of_saint_mary_major: 'Rocznica poświęcenia rzymskiej Bazyliki Najświętszej Maryi Panny',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Rocznica poświęcenia rzymskich bazylik świętych apostołów Piotra i Pawła',
    dedication_of_the_lateran_basilica: 'Rocznica poświęcenia Bazyliki Laterańskiej',
    denis_of_paris_bishop_and_companions_martyrs: 'Świętych męczenników Dionizego, biskupa, i Towarzyszy',
    dominic_de_guzman_priest: 'Św. Dominika, prezbitera',
    edmund_bojanowski: 'Bł. Edmunda Bojanowskiego',
    elizabeth_of_hungary_religious: 'Św. Elżbiety Węgierskiej, zakonnicy',
    elizabeth_of_portugal: 'Św. Elżbiety Portugalskiej',
    ephrem_the_syrian_deacon: 'Św. Efrema, diakona i doktora Kościoła',
    eusebius_of_vercelli_bishop: 'Św. Euzebiusza z Vercelii, biskupa',
    fabian_i_pope: 'Św. Fabiana, papieża i męczennika',
    faustina_kowalska_virgin: 'Św. Faustyny Kowalskiej, dziewicy',
    fidelis_of_sigmaringen_priest: 'Św. Fidelisa z Sigmaringen, prezbitera i męczennika',
    first_martyrs_of_the_holy_roman_church: 'Świętych Pierwszych męczenników Św. Kościoła rzymskiego',
    first_polish_martyrs: 'Świętych Benedykta, Jana, Mateusza, Izaaka i Krystyna, pierwszych męczenników Polski',
    florian_of_lorch_martyr: 'Św. Floriana, męczennika',
    frances_of_rome_religious: 'Św. Franciszki Rzymianki, zakonnicy',
    francis_de_sales_bishop: 'Św. Franciszka Salezego, biskupa i doktora Kościoła',
    francis_diaz_del_rincon_priest_and_companions_martyrs:
      'Świętych męczenników Franciszka Diaza, prezbitera, i Towarzyszy',
    francis_ferdinand_de_capillas_priest: 'Św. Franciszka Fernandeza de Capillas, prezbitera i męczennika',
    francis_of_assisi: 'Św. Franciszka z Asyżu',
    francis_of_assisi_patron_of_italy: 'Św. Franciszka z Asyżu, patrona Włoch',
    francis_of_paola_hermit: 'Św. Franciszka z Paoli, pustelnika',
    francis_xavier_priest: 'Św. Franciszka Ksawerego, prezbitera',
    gabriel_taurin_dufresse_bishop: 'Św. Gabriel-Taurina Dufresse, biskupa i męczennika',
    george_matulaitis_bishop: 'Bł. Jerzego Matulewicza, biskupa',
    george_of_lydda_martyr: 'Św. Grzegorza, męczennika',
    george_of_lydda_martyr_patron_of_england: 'Św. Grzegorza, męczennika, patrona Anglii',
    gertrude_the_great_virgin: 'Św. Gertrudy, dziewicy',
    gregory_grassi_francis_fogolla_and_anthony_fantosati_bishops_and_companions_martyrs:
      'Świętych męczenników Grzegorza Grassiego, Franciszka Fogolli i Antoniego Fantosatiego, biskupów, i Towarzyszy',
    gregory_i_the_great_pope: 'Św. Grzegorza Wielkiego, papieża i doktora Kościoła',
    gregory_of_narek_abbot: 'Św. Grzegorza z Nareku, opata i doktora Kościoła',
    gregory_vii_pope: 'Św. Grzegorza VII, papieża',
    guardian_angels: 'Świętych Aniołów Stróżów',
    hedwig_of_poland: 'Św. Jadwigi Królowej',
    hedwig_of_silesia_religious: 'Św. Jadwigi Śląskiej',
    henry_ii_emperor: 'Św. Henryka',
    henry_of_finland_bishop: 'Św. Henryka, biskupa i męczennika',
    hilary_of_poitiers_bishop: 'Św. Hilarego, biskupa i doktora Kościoła',
    holy_innocents_martyrs: 'Św. Młodzianków, męczenników',
    honorat_kozminski_priest: 'Bł. Honorata Koźmińskiego, prezbitera',
    hyacinth_of_poland_priest: 'Św. Jacka, prezbitera',
    ignatius_of_antioch_bishop: 'Św. Ignacego Antiocheńskiego, biskupa i męczennika',
    ignatius_of_loyola_priest: 'Św. Ignacego z Loyoli, prezbitera',
    irenaeus_of_lyon_bishop: 'Św. Ireneusza, biskupa, męczennika i doktora Kościoła',
    isidore_of_seville_bishop: 'Św. Izydora, biskupa i doktora Kościoła',
    james_apostle: 'Św. Jakuba, Apostoła',
    james_strzemie_bishop: 'Bł. Jakuba Strzemię, biskupa',
    jane_frances_de_chantal_religious: 'Św. Joanny Franciszki de Chantal, zakonnicy',
    januarius_i_of_benevento_bishop: 'Św. Januarego, biskupa i męczennika',
    jerome_emiliani: 'Św. Hieronima Emilianiego',
    jerome_of_stridon_priest: 'Św. Hieronima, prezbitera i doktora Kościoła',
    joachim_and_anne_parents_of_mary: 'Świętych Joachima i Anny, rodziców Najświętszej Maryi Panny',
    joachim_he_kaizhi_martyr: 'Św. Joachima He Kaizhi, męczennika',
    john_apostle: 'Św. Jana, Apostoła i Ewangelisty',
    john_baptist_de_la_salle_priest: 'Św. Jana Chrzciciela de la Salle, prezbitera',
    john_beyzym_priest: 'Bł. Jana Beyzyma, prezbitera',
    john_bosco_priest: 'Św. Jana Bosko, prezbitera',
    john_chrysostom_bishop: 'Św. Jana Chryzostoma, biskupa i doktora Kościoła',
    john_damascene_priest: 'Św. Jana Damasceńskiego, prezbitera i doktora Kościoła',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Świętych męczenników Jana de Brebeuf, Izaaka Jogues’a, prezbiterów, i Towarzyszy',
    john_eudes_priest: 'Św. Jana Eudesa, prezbitera',
    john_fisher_bishop_and_thomas_more_martyrs: 'Świętych męczenników Jana Fishera, biskupa i Tomasza More’a',
    john_gabriel_perboyre_priest: 'Św. Jana Gabriela Perboyre’a, prezbitera i męczennika',
    john_i_pope: 'Św. Jana I, papieża i męczennika',
    john_leonardi_priest: 'Św. Jana Leonardiego, prezbitera',
    john_martin_moye_priest: 'Bł. Jana Marcina Moyego, prezbitera',
    john_mary_vianney_priest: 'Św. Jana Marii Vianneya, prezbitera',
    john_of_capistrano_priest: 'Św. Jana Kapistrana, prezbitera',
    john_of_dukla_priest: 'Św. Jana z Dukli, prezbitera',
    john_of_god_duarte_cidade_religious: 'Św. Jana Bożego, zakonnika',
    john_of_kanty_priest: 'Św. Jana Kantego, prezbitera',
    john_of_the_cross_priest: 'Św. Jana od Krzyża, prezbitera i doktora Kościoła',
    john_of_triora_priest: 'Św. Jana z Triory, prezbitera i męczennika',
    john_paul_ii_pope: 'Św. Jana Pawła II, papieża',
    john_sarkander_priest: 'Św. Jana Sarkandra, prezbitera i męczennika',
    john_xxiii_pope: 'Św. Jana XXIII, papieża',
    josaphat_kuntsevych_bishop: 'Św. Jozafata, biskupa i męczennika',
    joseph_bilczewski_bishop: 'Św. Józefa Bilczewskiego, biskupa',
    joseph_freinademetz_priest: 'Św. Józefa Freinademetza, prezbitera',
    joseph_of_calasanz_priest: 'Św. Józefa Kalasantego, prezbitera',
    joseph_sebastian_pelczar_bishop: 'Św. Józefa Sebastiana Pelczara, biskupa',
    joseph_the_worker: 'Św. Józefa, rzemieślnika',
    joseph_yuan_gengyin_priest: 'Św. Józefa Yuana, prezbitera i męczennika',
    joseph_zhang_dapeng_martyr: 'Św. Józefa Zhang Dapenga, męczennika',
    josephine_bakhita_virgin: 'Św. Józefiny Bakhity, dziewicy',
    juan_diego_cuauhtlatoatzin: 'Św. Jana Diego Cuahtlatoatzin',
    justin_martyr: 'Św. Justyna, męczennika',
    kinga_of_poland_virgin: 'Św. Kingi, dziewicy',
    ladislas_of_gielniow_priest: 'Bł. Władysława z Gielniowa, prezbitera',
    laurence_wang_bing_and_companions_martyrs: 'Świętych męczenników Wawrzyńca Wang Binga i Towarzyszy',
    lawrence_bai_xiaoman_martyr: 'Św. Wawrzyńa Bai Xiaomana, męczennika',
    lawrence_of_brindisi_priest: 'Św. Wawrzyńca z Brindisi, prezbitera i doktora Kościoła',
    lawrence_of_rome_deacon: 'Św. Wawrzyńca, diakona i męczennika',
    lawrence_ruiz_and_companions_martyrs: 'Świętych męczenników Wawrzyńca Ruiz i Towarzyszy',
    leo_i_the_great_pope: 'Św. Leona Wielkiego, papieża i doktora Kościoła',
    leo_ignatius_mangin_priest_and_companions_martyrs: 'Świętych męczenników Leona Mangina, prezbitera, i Towarzyszy',
    louis_grignion_de_montfort_priest: 'Św. Ludwika Marii Grignion de Montfort, prezbitera',
    louis_ix_of_france: 'Św. Ludwika',
    lucy_of_syracuse_virgin: 'Św. Łucji, dziewicy i męczennicy',
    lucy_yi_zhenmei_virgin: 'Św. Łucji Yi Zhenmei, Dziewicy i Męcznnicy',
    luke_evangelist: 'Św. Łukasza, Ewangelisty',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Świętych męczenników Marcelina i Piotra',
    margaret_mary_alacoque_virgin: 'Św. Małgorzaty Marii Alacoque, dziewicy',
    margaret_of_scotland: 'Św. Małgorzaty Szkockiej',
    maria_goretti_virgin: 'Św. Marii Goretti, dziewicy i męczennicy',
    mark_evangelist: 'Św. Marka, Ewangelisty',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Św. Marty, Marii i Łazarza',
    martin_de_porres_religious: 'Św. Marcina de Porres, zakonnika',
    martin_i_pope: 'Św. Marcina I, papieża i męczennika',
    martin_of_tours_bishop: 'Św. Marcina z Tours, biskupa',
    martin_wu_xuesheng_and_companions_martyrs: 'Świętych męczenników Marcina Wu Xueshenga, i Towarzyszy',
    mary_angela_truszkowska_virgin: 'Bł. Marii Angeli Truszkowskiej, dziewicy',
    mary_assunta_pallotta_virgin: 'Bł. Marii Assunty Pallotty, Dziewicy',
    mary_magdalene: 'Św. Marii Magdaleny',
    mary_magdalene_de_pazzi_virgin: 'Św. Marii Magdaleny de Pazzi, dziewicy',
    mary_mother_of_the_church: 'Najświętszej Maryi Panny, Matki Kościoła',
    mary_of_jesus_the_good_shepherd_siedliska_virgin:
      'Bł. Marii od Pana Jezusa Dobrego Pasterza (Franciszki Siedliskiej), zakonnicy',
    mary_stella_of_the_blessed_sacrament_mardosewicz_and_companions_virgins:
      'Błogosławionych dziewic i męczennic Marii Stelli i Towarzyszek',
    mary_theresa_ledochowska_virgin: 'Bł. Marii Teresy Ledóchowskiej, dziewicy',
    mary_ursula_of_jesus_ledochowska_virgin: 'Św. Urszuli Ledóchowskiej, dziewicy',
    matthew_apostle: 'Św. Mateusza, Apostoła i Ewangelisty',
    matthias_apostle: 'Św. Macieja, Apostoła',
    maurice_tornay_priest: 'Bł. Maurycego Tornaya, prezbitera i męczennika',
    maximilian_kolbe_priest: 'Św. Maksymiliana Marii Kolbego, prezbitera i męczennika',
    melchior_grodziecki_priest: 'Św. Melchiora Grodzieckiego, prezbitera i męczennika',
    michael_gabriel_and_raphael_archangels: 'Świętych Archaniołów Michała, Gabriela i Rafała',
    michael_kozal_bishop: 'Bł. Michała Kozala, biskupa i męczennika',
    monica_of_hippo: 'Św. Moniki',
    most_holy_name_of_jesus: 'Najświętszego Imienia Jezus',
    most_holy_name_of_mary: 'Najświętszego Imienia Maryi',
    nativity_of_mary: 'Narodzenie Najświętszej Maryi Panny',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Świętych męczenników Nereusza i Achillesa',
    nicholas_of_myra_bishop: 'Św. Mikołaja, biskupa',
    norbert_of_xanten_bishop: 'Św. Norberta, biskupa',
    odoric_of_pordenone_priest: 'Bł. Odoryka z Pordenone, prezbitera',
    otto_of_bamberg_bishop: 'Św. Ottona, biskupa',
    our_lady_help_of_christians: 'Najświętszej Maryi Panny, Wspomożycielki Wiernych',
    our_lady_of_china: 'Najświętszej Maryi Panny z Chin',
    our_lady_of_czestochowa: 'Najświętszej Maryi Panny Częstochowskiej',
    our_lady_of_fatima: 'Najświętszej Maryi Panny z Fatimy',
    our_lady_of_guadalupe: 'Najświętszej Maryi Panny z Guadalupe',
    our_lady_of_guadalupe_patroness_of_the_americas: 'Najświętszej Maryi Panny z Guadalupe, Patronki obu Ameryk',
    our_lady_of_loreto: 'Najświętszej Maryi Panny Loretańskiej',
    our_lady_of_lourdes: 'Najświętszej Maryi Panny z Lourdes',
    our_lady_of_mount_carmel: 'Najświętszej Maryi Panny z Góry Karmel',
    our_lady_of_sorrows: 'Najświętszej Maryi Panny Bolesnej',
    our_lady_of_sorrows_patroness_of_slovakia: 'Najświętszej Maryi Panny Bolesnej, patronki Słowacji',
    our_lady_of_the_rosary: 'Najświętszej Maryi Panny Różańcowej',
    our_lady_queen_of_poland: 'Najświętszej Maryi Panny, Królowej Polski, głownej patronki Polski',
    our_lord_jesus_christ_the_eternal_high_priest: 'Jezusa Chrystusa, Najwyższego i Wiecznego Kapłana',
    pancras_of_rome_martyr: 'Św. Pankracego, męczennika',
    passion_of_saint_john_the_baptist: 'Męczeństwo św. Jana Chrzciciela',
    patrick_of_ireland_bishop: 'Św. Patryka, biskupa',
    patrick_of_ireland_bishop_patron_of_ireland: 'Św. Patryka, biskupa, patrona Irlandii',
    paul_chen_changpin_and_companions_martyrs: 'Świętych męczenników Pawła Chen Changpina i Towarzyszy',
    paul_liu_hanzuo_priest: 'Św. Pawła Liu Hanzuo, prezbitera i męczennika',
    paul_miki_and_companions_martyrs: 'Świętych męczenników Pawła Miki i Towarzyszy',
    paul_of_the_cross_priest: 'Św. Pawła od Krzyża, prezbitera',
    paulinus_of_nola_bishop: 'Św. Paulina z Noli, biskupa',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Świętych męczennic Perpetuy i Felicyty',
    peter_canisius_priest: 'Św. Piotra Kanizjusza, prezbitera i doktora Kościoła',
    peter_chanel_priest: 'Św. Piotra Chanela, prezbitera i męczennika',
    peter_chrysologus_bishop: 'Św. Piotra Chryzologa, biskupa i doktora Kościoła',
    peter_claver_priest: 'Św. Piotra Klawera, prezbitera',
    peter_damian_bishop: 'Św. Piotra Damianiego, biskupa i doktora Kościoła',
    peter_julian_eymard_priest: 'Św. Piotra Juliani Eymarda, prezbitera',
    peter_liu_wenyuan_martyr: 'Św. Piotra Liu Wenyuan, męczennika',
    peter_sanz_bishop: 'Św. Piotra Sanza, Biskupa i Męczennika',
    peter_wu_guosheng_martyr: 'Św. Piotra Wu Guosheng, męczennika',
    philip_and_james_apostles: 'Świętych Apostołów Filipa i Jakuba',
    philip_neri_priest: 'Św. Filipa Nereusza, prezbitera',
    pius_of_pietrelcina_priest: 'Św. Pio z Pietrelciny, prezbitera',
    pius_v_pope: 'Św. Piusa V, papieża',
    pius_x_pope: 'Św. Piusa X, papieża',
    polycarp_of_smyrna_bishop: 'Św. Polikarpa, biskupa i męczennika',
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Świętych męczenników Poncjana, papieża i Hipolita, prezbiteras',
    presentation_of_mary: 'Ofiarowanie Najświętszej Maryi Panny',
    queenship_of_mary: 'Najświętszej Maryi Panny, Królowej',
    raphael_chylinski_priest: 'Bł. Rafała Chylińskiego, prezbitera',
    raphael_of_saint_joseph_kalinowski_priest: 'Św. Rafała Kalinowskiego, prezbitera',
    raymond_of_penyafort_priest: 'Św. Rajmunda z Penyafort, prezbitera',
    rita_of_cascia_religious: 'Św. Rity z Cascii, zakonnicy',
    robert_bellarmine_bishop: 'Św. Roberta Bellarmina, biskupa i doktora Kościoła',
    romuald_of_ravenna_abbot: 'Św. Romualda, opata',
    rose_of_lima_virgin: 'Św. Róży z Limy, dziewicy',
    salomea_of_poland_religious: 'Bł. Salomei, zakonnicy',
    scholastica_of_nursia_virgin: 'Św. Scholastyki, dziewicy',
    sebastian_of_milan_martyr: 'Św. Sebastiana, męczennika',
    seven_holy_founders_of_the_servite_order: 'Świętych siedmiu założycieli Zakonu Serwitów Najświętszej Maryi Panny',
    seven_martyred_nuns_from_the_franciscan_missionaries_of_mary:
      'Siedmiu męcznnic ze Zgromadzenia Franciszkanek Misjonarek Maryi',
    sharbel_makhluf_priest: 'Św. Szarbela Maklufa, prezbitera',
    sigmund_felix_felinski_bishop: 'Św. Zygmunta Szczęsnego Felińskiego, biskupa',
    simon_and_jude_apostles: 'Świętych Apostołów Szymona i Judy Tadeusza',
    simon_of_lipnica_priest: 'Św. Szymona z Lipnicy, prezbitera',
    sixtus_ii_pope_and_companions_martyrs: 'Świętych męczenników Sykstusa II, papieża, i Towarzyszy',
    stanislaus_kazimierczyk_priest: 'Św. Stanisława Kazimierczyka, prezbitera',
    stanislaus_kostka_religious: 'Św. Stanisława Kostki, zakonnika, patrona Polski',
    stanislaus_of_szczepanow_bishop: 'Św. Stanisława, biskupa i męczennika',
    stanislaus_of_szczepanow_bishop_patron_of_poland: 'Św. Stanisława, biskupa i męczennika, głównego patrona Polski',
    stephen_i_of_hungary: 'Św. Stefana Węgierskiego',
    stephen_the_first_martyr: 'Św. Szczepana, pierwszego męczennika',
    sylvester_i_pope: 'Św. Sylwestra I, papieża',
    teresa_benedicta_of_the_cross_stein_virgin: 'Św. Teresy Benedykty od Krzyża, dziewicy i męczennicy',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Św. Teresy Benedykty od Krzyża, dziewicy i męczennicy, patronki Europy',
    teresa_of_jesus_of_avila_virgin: 'Św. Teresy od Jezusa, dziewicy i doktora Kościoła',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Św. Teresy od Dzieciątka Jezus, dziewicy i doktora Kościoła',
    thomas_apostle: 'Św. Tomasza, Apostoła',
    thomas_aquinas_priest: 'Św. Tomasza z Akwinu, prezbitera i doktora Kościoła',
    thomas_becket_bishop: 'Św. Tomasza Becketa, biskupa i męczennika',
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Świętych biskupów Tymoteusza i Tytusa',
    turibius_of_mogrovejo_bishop: 'Św. Turybiusza z Mongrovejo, biskupa',
    vincent_de_paul_priest: 'Św. Wincentego à Paulo, prezbitera',
    vincent_ferrer_priest: 'Św. Wincentego Ferreriusza, prezbitera',
    vincent_kadlubek_bishop: 'Bł. Wincentego Kadłubka, biskupa',
    vincent_lewoniuk_and_companions_martyrs: 'Błogosławionych męczenników Wincentego Lewoniuka i Towarzyszy',
    vincent_of_saragossa_deacon: 'Św. Wincentego, diakona i męczennika',
    vincent_pallotti_priest: 'Św. Wincentego Pallottiego, prezbitera',
    visitation_of_mary: 'Nawiedzenie Najświętszej Maryi Panny',
    wenceslaus_i_of_bohemia_martyr: 'Św. Wacława, męczennika',
    wenceslaus_i_of_bohemia_martyr_patron_of_the_czech_nation: 'Św. Wacława, męczennika, patrona narodu czeskiego',
    wladyslaw_of_gielniow_priest: 'Bł. Władysława z Gielniowa, prezbitera',
    yolanda_of_poland_religious: 'Bł. Jolanty, zakonnicy',
    zdislava_of_lemberk: 'Św. Zdzisławy',
    zygmunt_gorazdowski_priest: 'Św. Zygmunta Gorazdowskiego, prezbitera',
  },
};
