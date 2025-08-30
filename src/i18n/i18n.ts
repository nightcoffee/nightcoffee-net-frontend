import { ref, Ref } from 'vue'
import { Locale } from 'ant-design-vue/lib/vc-picker/interface'
import dayjs from 'dayjs'

import antd_en_US from 'ant-design-vue/es/locale/en_US'
import antd_ja_JP from 'ant-design-vue/es/locale/ja_JP'
import antd_zh_TW from 'ant-design-vue/es/locale/zh_TW'
import antd_zh_CN from 'ant-design-vue/es/locale/zh_CN'
import antd_de_DE from 'ant-design-vue/es/locale/de_DE'
import antd_fr_FR from 'ant-design-vue/es/locale/fr_FR'
import antd_es_ES from 'ant-design-vue/es/locale/es_ES'
import antd_ko_KR from 'ant-design-vue/es/locale/ko_KR'
import antd_pt_BR from 'ant-design-vue/es/locale/pt_BR'
import antd_th_TH from 'ant-design-vue/es/locale/th_TH'
import antd_el_GR from 'ant-design-vue/es/locale/el_GR'
import antd_hi_IN from 'ant-design-vue/es/locale/hi_IN'
import antd_vi_VN from 'ant-design-vue/es/locale/vi_VN'

import 'dayjs/locale/en'
import 'dayjs/locale/ja'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/de'
import 'dayjs/locale/fr'
import 'dayjs/locale/es'
import 'dayjs/locale/ko'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/th'
import 'dayjs/locale/el'
import 'dayjs/locale/hi'
import 'dayjs/locale/vi'

export type SupportedLocale = 'en_US' | 'zh_CN' 
const SupportedLocales: SupportedLocale[] = [ 'en_US', 'zh_CN']

interface ObjectMap {
    [index: string]: Object
}

interface StringMap {
    [index: string]: string
}

const antdLocales: ObjectMap = {
    'en_US': antd_en_US,
    'zh_CN': antd_zh_CN
}

const dayJsLocales: StringMap = {
    'en_US': 'en',
    'zh_CN': 'zh-cn'
}

const locale: Ref<SupportedLocale> = ref('en_US');

const setLocale = async (localeString: SupportedLocale): Promise<Locale> => {
    locale.value = localeString
    dayjs.locale(dayJsLocales[localeString])
    const ret = antdLocales[localeString] as Locale
    localStorage.setItem('locale', localeString)
    return ret
}

const getLocaleName = (locale: SupportedLocale) => {
    switch (locale) {
        case 'en_US': default: return 'English'
        case 'zh_CN': return '简体中文 (Simplified Chinese)'
    }
}

const getLocaleCodeAlias = (locale: SupportedLocale) => {
    switch (locale) {
        case 'en_US': default: return 'gb'
        case 'zh_CN': return 'sg'
    }
}

export {
    setLocale,
    getLocaleName,
    locale,
    SupportedLocales,
    getLocaleCodeAlias
}


