// schema.org JSON-LD for search engines and AI answer engines. Facts only: nothing here may
// claim more than the visible page does (no ratings, prices or awards).
import type { ProjectCopy, SiteContent } from './types';

const site = 'https://www.xuanhengtech.cn';
const orgId = `${site}/#organization`;

export const organization = (content: SiteContent) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: '苏州玄衡科技有限公司',
  alternateName: ['玄衡科技', 'Xuanheng Technology', 'Suzhou Xuanheng Technology Co., Ltd.'],
  url: `${site}/`,
  logo: `${site}/brand/xuanheng-mark.svg`,
  email: 'contact@xuanhengtech.cn',
  telephone: content.contact.phone.display,
  foundingDate: '2026',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '淀山湖镇双永路999号',
    addressLocality: '苏州市昆山市',
    addressRegion: '江苏省',
    addressCountry: 'CN',
  },
  sameAs: ['https://github.com/xuanheng-tech', 'https://x.com/xuanhengtech'],
});

export const website = (content: SiteContent) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: `${site}${content.locale === 'zh' ? '/zh-cn/' : '/'}`,
  name: content.locale === 'zh' ? '玄衡科技' : 'Xuanheng Technology',
  inLanguage: content.htmlLang,
  publisher: { '@id': orgId },
});

/** Industry products and open-source tools; research projects carry no software claim. */
export const projectSchema = (content: SiteContent, project: ProjectCopy) => {
  const base = {
    '@context': 'https://schema.org',
    name: project.name,
    alternateName: project.englishName !== project.name ? project.englishName : undefined,
    description: project.summary,
    url: `${site}${project.detailPath}`,
    inLanguage: content.htmlLang,
    publisher: { '@id': orgId },
  };
  if (project.group === 'openSourceTool') {
    return {
      ...base,
      '@type': 'SoftwareSourceCode',
      codeRepository: project.repositoryUrl,
      license: 'https://www.apache.org/licenses/LICENSE-2.0',
    };
  }
  if (project.group === 'product') {
    return { ...base, '@type': 'SoftwareApplication', applicationCategory: 'BusinessApplication' };
  }
  return undefined;
};
