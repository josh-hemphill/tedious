// http://technet.microsoft.com/en-us/library/aa176553(v=sql.80).aspx
export const codepageByLcid: { [key: number]: string | undefined } = {
  // Arabic_*
  [0x0401]: 'CP1256',

  // Chinese_Taiwan_Stroke_*
  // Chinese_Traditional_Stroke_Count_*
  [0x0404]: 'CP950',

  // Czech_*
  [0x0405]: 'CP1250',

  // Danish_Greenlandic_*
  // Danish_Norwegian_*
  [0x0406]: 'CP1252',

  // Greek_*
  [0x0408]: 'CP1253',

  // Latin1_General_*
  [0x0409]: 'CP1252',

  // Traditional_Spanish_*
  [0x040A]: 'CP1252',

  // Finnish_Swedish_*
  [0x040B]: 'CP1252',

  // French_*
  [0x040C]: 'CP1252',

  // Hebrew_*
  [0x040D]: 'CP1255',

  // Hungarian_*
  [0x040E]: 'CP1250',

  // Icelandic_*
  [0x040F]: 'CP1252',

  // Japanese_*
  // Japanese_XJIS_*
  [0x0411]: 'CP932',

  // Korean_*
  // Korean_Wansung_*
  [0x0412]: 'CP949',

  // Norwegian_*
  [0x0414]: 'CP1252',

  // Polish_*
  [0x0415]: 'CP1250',

  // Romansh_*
  [0x0417]: 'CP1252',

  // Romanian_*
  [0x0418]: 'CP1250',

  // Cyrillic_*
  [0x0419]: 'CP1251',

  // Croatian_*
  [0x041A]: 'CP1250',

  // Slovak_*
  [0x041B]: 'CP1250',

  // Albanian_*
  [0x041C]: 'CP1250',

  // Thai_*
  [0x041E]: 'CP874',

  // Turkish_*
  [0x041F]: 'CP1254',

  // Urdu_*
  [0x0420]: 'CP1256',

  // Ukrainian_*
  [0x0422]: 'CP1251',

  // Slovenian_*
  [0x0424]: 'CP1250',

  // Estonian_*
  [0x0425]: 'CP1257',

  // Latvian_BIN
  [0x0426]: 'CP1257',

  // Lithuanian_BIN
  [0x0427]: 'CP1257',

  // Persian_100_BIN
  [0x0429]: 'CP1256',

  // Vietnamese_BIN
  [0x042A]: 'CP1258',

  // Azeri_Latin_100_BIN
  [0x042C]: 'CP1254',

  // Upper_Sorbian_100_BIN
  [0x042E]: 'CP1252',

  // Macedonian_FYROM_90_BIN
  [0x042F]: 'CP1251',

  // Sami_Norway_100_BIN
  [0x043B]: 'CP1252',

  // Kazakh_90_BIN
  [0x043F]: 'CP1251',

  // Turkmen_100_BIN
  [0x0442]: 'CP1250',

  // Uzbek_Latin_90_BIN
  [0x0443]: 'CP1254',

  // Tatar_90_BIN
  [0x0444]: 'CP1251',

  // Welsh_100_BIN
  [0x0452]: 'CP1252',

  // Frisian_100_BIN
  [0x0462]: 'CP1252',

  // Bashkir_100_BIN
  [0x046D]: 'CP1251',

  // Mapudungan_100_BIN
  [0x047A]: 'CP1252',

  // Mohawk_100_BIN
  [0x047C]: 'CP1252',

  // Breton_100_BIN
  [0x047E]: 'CP1252',

  // Uighur_100_BIN
  [0x0480]: 'CP1256',

  // Corsican_100_BIN
  [0x0483]: 'CP1252',

  // Yakut_100_BIN
  [0x0485]: 'CP1251',

  // Dari_100_BIN
  [0x048C]: 'CP1256',

  // Chinese_PRC_BIN
  // Chinese_Simplified_Pinyin_100_BIN
  [0x0804]: 'CP936',

  // Serbian_Latin_100_BIN
  [0x081A]: 'CP1250',

  // Azeri_Cyrillic_100_BIN
  [0x082C]: 'CP1251',

  // Sami_Sweden_Finland_100_BIN
  [0x083B]: 'CP1252',

  // Tamazight_100_BIN
  [0x085F]: 'CP1252',

  // Chinese_Hong_Kong_Stroke_90_BIN
  [0x0C04]: 'CP950',

  // Modern_Spanish_BIN
  [0x0C0A]: 'CP1252',

  // Serbian_Cyrillic_100_BIN
  [0x0C1A]: 'CP1251',

  // Chinese_Traditional_Pinyin_100_BIN
  [0x1404]: 'CP950',

  // Bosnian_Latin_100_BIN
  [0x141A]: 'CP1250',

  // Bosnian_Cyrillic_100_BIN
  [0x201A]: 'CP1251',

  // German
  [0x0407]: 'CP1252',

  // German_PhoneBook_BIN
  [0x10407]: 'CP1252',

  // Hungarian_Technical_BIN
  [0x1040E]: 'CP1250',

  // Japanese_Unicode_BIN
  [0x10411]: 'CP932',

  // Georgian_Modern_Sort_BIN
  [0x10437]: 'CP1252',

  // Chinese_PRC_Stroke_BIN
  // Chinese_Simplified_Stroke_Order_100_BIN
  [0x20804]: 'CP936',

  // Chinese_Traditional_Stroke_Order_100_BIN
  [0x21404]: 'CP950',

  // Chinese_Taiwan_Bopomofo_BIN
  // Chinese_Traditional_Bopomofo_100_BIN
  [0x30404]: 'CP950',

  // Japanese_Bushu_Kakusu_100_BIN
  [0x40411]: 'CP932',

  // These LCIDs might not actually be supported by SQL Server

  [0x0436]: 'CP1252',
  [0x0801]: 'CP1256',
  [0x0C01]: 'CP1256',
  [0x1001]: 'CP1256',
  [0x1401]: 'CP1256',
  [0x1801]: 'CP1256',
  [0x1C01]: 'CP1256',
  [0x2001]: 'CP1256',
  [0x2401]: 'CP1256',
  [0x2801]: 'CP1256',
  [0x2C01]: 'CP1256',
  [0x3001]: 'CP1256',
  [0x3401]: 'CP1256',
  [0x3801]: 'CP1256',
  [0x3C01]: 'CP1256',
  [0x4001]: 'CP1256',
  [0x42D]: 'CP1252',
  [0x423]: 'CP1251',
  [0x402]: 'CP1251',
  [0x403]: 'CP1252',
  [0x1004]: 'CP936',
  [0x413]: 'CP1252',
  [0x813]: 'CP1252',
  [0x809]: 'CP1252',
  [0x1009]: 'CP1252',
  [0x1409]: 'CP1252',
  [0xC09]: 'CP1252',
  [0x1809]: 'CP1252',
  [0x1C09]: 'CP1252',
  [0x2409]: 'CP1252',
  [0x2009]: 'CP1252',
  [0x0438]: 'CP1252',
  [0x80C]: 'CP1252',
  [0x100C]: 'CP1252',
  [0xC0C]: 'CP1252',
  [0x140C]: 'CP1252',
  [0x807]: 'CP1252',
  [0xC07]: 'CP1252',
  [0x1007]: 'CP1252',
  [0x1407]: 'CP1252',
  [0x439]: 'CPUTF8',
  [0x104E]: 'CP1250',
  [0x421]: 'CP1252',
  [0x410]: 'CP1252',
  [0x810]: 'CP1252',
  [0x827]: 'CP1257',
  [0x814]: 'CP1252',
  [0x816]: 'CP1252',
  [0x416]: 'CP1252',
  [0x80A]: 'CP1252',
  [0x100A]: 'CP1252',
  [0x140A]: 'CP1252',
  [0x180A]: 'CP1252',
  [0x1C0A]: 'CP1252',
  [0x200A]: 'CP1252',
  [0x240A]: 'CP1252',
  [0x280A]: 'CP1252',
  [0x2C0A]: 'CP1252',
  [0x300A]: 'CP1252',
  [0x340A]: 'CP1252',
  [0x380A]: 'CP1252',
  [0x3C0A]: 'CP1252',
  [0x400A]: 'CP1252',
  [0x41D]: 'CP1252',
};

export const codepageBySortId: { [key: number]: string | undefined } = {
  [30]: 'CP437', // SQL_Latin1_General_CP437_BIN
  [31]: 'CP437', // SQL_Latin1_General_CP437_CS_AS
  [32]: 'CP437', // SQL_Latin1_General_CP437_CI_AS
  [33]: 'CP437', // SQL_Latin1_General_Pref_CP437_CI_AS
  [34]: 'CP437', // SQL_Latin1_General_CP437_CI_AI
  [40]: 'CP850', // SQL_Latin1_General_CP850_BIN
  [41]: 'CP850', // SQL_Latin1_General_CP850_CS_AS
  [42]: 'CP850', // SQL_Latin1_General_CP850_CI_AS
  [43]: 'CP850', // SQL_Latin1_General_Pref_CP850_CI_AS
  [44]: 'CP850', // SQL_Latin1_General_CP850_CI_AI
  [49]: 'CP850', // SQL_1xCompat_CP850_CI_AS
  [51]: 'CP1252', // SQL_Latin1_General_Cp1_CS_AS_KI_WI
  [52]: 'CP1252', // SQL_Latin1_General_Cp1_CI_AS_KI_WI
  [53]: 'CP1252', // SQL_Latin1_General_Pref_Cp1_CI_AS_KI_WI
  [54]: 'CP1252', // SQL_Latin1_General_Cp1_CI_AI_KI_WI
  [55]: 'CP850', // SQL_AltDiction_CP850_CS_AS
  [56]: 'CP850', // SQL_AltDiction_Pref_CP850_CI_AS
  [57]: 'CP850', // SQL_AltDiction_CP850_CI_AI
  [58]: 'CP850', // SQL_Scandinavian_Pref_CP850_CI_AS
  [59]: 'CP850', // SQL_Scandinavian_CP850_CS_AS
  [60]: 'CP850', // SQL_Scandinavian_CP850_CI_AS
  [61]: 'CP850', // SQL_AltDiction_CP850_CI_AS
  [80]: 'CP1250', // SQL_Latin1_General_1250_BIN
  [81]: 'CP1250', // SQL_Latin1_General_CP1250_CS_AS
  [82]: 'CP1250', // SQL_Latin1_General_Cp1250_CI_AS_KI_WI
  [83]: 'CP1250', // SQL_Czech_Cp1250_CS_AS_KI_WI
  [84]: 'CP1250', // SQL_Czech_Cp1250_CI_AS_KI_WI
  [85]: 'CP1250', // SQL_Hungarian_Cp1250_CS_AS_KI_WI
  [86]: 'CP1250', // SQL_Hungarian_Cp1250_CI_AS_KI_WI
  [87]: 'CP1250', // SQL_Polish_Cp1250_CS_AS_KI_WI
  [88]: 'CP1250', // SQL_Polish_Cp1250_CI_AS_KI_WI
  [89]: 'CP1250', // SQL_Romanian_Cp1250_CS_AS_KI_WI
  [90]: 'CP1250', // SQL_Romanian_Cp1250_CI_AS_KI_WI
  [91]: 'CP1250', // SQL_Croatian_Cp1250_CS_AS_KI_WI
  [92]: 'CP1250', // SQL_Croatian_Cp1250_CI_AS_KI_WI
  [93]: 'CP1250', // SQL_Slovak_Cp1250_CS_AS_KI_WI
  [94]: 'CP1250', // SQL_Slovak_Cp1250_CI_AS_KI_WI
  [95]: 'CP1250', // SQL_Slovenian_Cp1250_CS_AS_KI_WI
  [96]: 'CP1250', // SQL_Slovenian_Cp1250_CI_AS_KI_WI
  [104]: 'CP1251', // SQL_Latin1_General_1251_BIN
  [105]: 'CP1251', // SQL_Latin1_General_CP1251_CS_AS
  [106]: 'CP1251', // SQL_Latin1_General_CP1251_CI_AS
  [107]: 'CP1251', // SQL_Ukrainian_Cp1251_CS_AS_KI_WI
  [108]: 'CP1251', // SQL_Ukrainian_Cp1251_CI_AS_KI_WI
  [112]: 'CP1253', // SQL_Latin1_General_1253_BIN
  [113]: 'CP1253', // SQL_Latin1_General_CP1253_CS_AS
  [114]: 'CP1253', // SQL_Latin1_General_CP1253_CI_AS
  [120]: 'CP1253', // SQL_MixDiction_CP1253_CS_AS
  [121]: 'CP1253', // SQL_AltDiction_CP1253_CS_AS
  [122]: 'CP1253', // SQL_AltDiction2_CP1253_CS_AS
  [124]: 'CP1253', // SQL_Latin1_General_CP1253_CI_AI
  [128]: 'CP1254', // SQL_Latin1_General_1254_BIN
  [129]: 'CP1254', // SQL_Latin1_General_Cp1254_CS_AS_KI_WI
  [130]: 'CP1254', // SQL_Latin1_General_Cp1254_CI_AS_KI_WI
  [136]: 'CP1255', // SQL_Latin1_General_1255_BIN
  [137]: 'CP1255', // SQL_Latin1_General_CP1255_CS_AS
  [138]: 'CP1255', // SQL_Latin1_General_CP1255_CI_AS
  [144]: 'CP1256', // SQL_Latin1_General_1256_BIN
  [145]: 'CP1256', // SQL_Latin1_General_CP1256_CS_AS
  [146]: 'CP1256', // SQL_Latin1_General_CP1256_CI_AS
  [152]: 'CP1257', // SQL_Latin1_General_1257_BIN
  [153]: 'CP1257', // SQL_Latin1_General_CP1257_CS_AS
  [154]: 'CP1257', // SQL_Latin1_General_CP1257_CI_AS
  [155]: 'CP1257', // SQL_Estonian_Cp1257_CS_AS_KI_WI
  [156]: 'CP1257', // SQL_Estonian_Cp1257_CI_AS_KI_WI
  [157]: 'CP1257', // SQL_Latvian_Cp1257_CS_AS_KI_WI
  [158]: 'CP1257', // SQL_Latvian_Cp1257_CI_AS_KI_WI
  [159]: 'CP1257', // SQL_Lithuanian_Cp1257_CS_AS_KI_WI
  [160]: 'CP1257', // SQL_Lithuanian_Cp1257_CI_AS_KI_WI
  [183]: 'CP1252', // SQL_Danish_Pref_Cp1_CI_AS_KI_WI
  [184]: 'CP1252', // SQL_SwedishPhone_Pref_Cp1_CI_AS_KI_WI
  [185]: 'CP1252', // SQL_SwedishStd_Pref_Cp1_CI_AS_KI_WI
  [186]: 'CP1252' // SQL_Icelandic_Pref_Cp1_CI_AS_KI_WI
};
