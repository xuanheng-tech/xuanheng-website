// /llms.txt — a plain-Markdown map of the site for AI assistants and answer engines
// (https://llmstxt.org). Built from the same content as the pages, so it never drifts.
import type { APIRoute } from 'astro';
import { en } from '../i18n/en';
import { zh } from '../i18n/zh';
import { groupsForSection, routeFor } from '../i18n/routes';
import type { SectionKey } from '../i18n/types';

const site = 'https://www.xuanhengtech.cn';
const url = (path: string) => `${site}${path}`;

const section = (key: SectionKey, heading: string) => {
  const lines = en.projects
    .filter((project) => groupsForSection[key].includes(project.group))
    .map((project) => {
      const chinese = zh.projects.find((item) => item.slug === project.slug);
      if (!chinese) throw new Error(`llms.txt: no Chinese entry for ${project.slug}`);
      const zhName = chinese.name === project.name ? '' : `${chinese.name}, `;
      return `- [${project.name}](${url(project.detailPath)}) (${zhName}[中文](${url(chinese.detailPath)})): ${project.summary}`;
    });
  return [`## ${heading}`, '', ...lines, ''];
};

export const GET: APIRoute = () => {
  const body = [
    '# Xuanheng Technology (玄衡科技)',
    '',
    `> ${en.seo.home.description}`,
    '',
    `Suzhou Xuanheng Technology Co., Ltd. (苏州玄衡科技有限公司), Suzhou, China. Email: contact@xuanhengtech.cn. Phone: ${en.contact.phone.display} (${en.contact.phone.hours}). Every page exists in English and Simplified Chinese (/zh-cn/).`,
    '',
    ...section('products', 'Industry products'),
    ...section('openSource', 'Open-source tools (Apache-2.0)'),
    ...section('research', 'Research'),
    '## Company',
    '',
    `- [About](${url(routeFor('en', 'about'))}) ([中文](${url(routeFor('zh', 'about'))})): ${en.seo.about.description}`,
    `- [Trust Center](${url(routeFor('en', 'trust'))}) ([中文](${url(routeFor('zh', 'trust'))})): ${en.seo.trust.description}`,
    `- [Updates](${url(routeFor('en', 'updates'))}) ([中文](${url(routeFor('zh', 'updates'))})): ${en.seo.updates.description}`,
    `- [Contact](${url(routeFor('en', 'contact'))}) ([中文](${url(routeFor('zh', 'contact'))})): ${en.seo.contact.description}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
