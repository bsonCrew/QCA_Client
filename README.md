# **QCA_Client**

## 2022 공개 SW 개발자 대회 Client


# **전자정부 웹사이트 품질관리 가이드**

> 전자정부 웹사이트 품질관리 가이드 평가기준은 웹 호환성, 웹 접근성, 웹 개방성, 웹 접속성, (웹 효율성, 웹 신뢰성) 입니다.

## **웹 호환성**

---

### 웹 표준 준수

- HTML 표준 준수: 웹페이지의 문법은 기술표준((X)HTML)을 준수하여야 함, 최신 웹표준(HTML5)을 적용하여야 함
- CSS 표준: 웹페이지의 시각적 속성(크기, 색채, 배치, 정렬 및 여백 등)은 기술표준(CSS)을 준수하여야 함
- 문자(한글) 부호화 준수: 웹 페이지에서 문자를 부호화하는 방식을 UTF-8로 적용하여야 함
- 제어 기능의 표준 준수: 웹 페이지의 동적으로 구성하고 제어하는 기술표준(DOM, ECMA-262등)을 적용하여야 함
- 비표준 기술 제거 공공 웹사이트 플러그인 제거 가이드라인(행정안전부 배포)을 준수하여야 함


### 웹 호환성 확보

- 기능 호환성 확보: 웹페이지를 동적으로 구성하고 제어하는 기능은 모든 브라우저에서 동등하게 동작하여야 함
- 화면표시 호환성 확보: 웹페이지가 다양한 브라우저에서 동등하게 표현되어야 함

### 웹 모바일 웹 호환성 확보

- 웹페이지를 동적으로 구성하고 제어하는 기능은 모든 모바일 운영체제에서 동등하게 동작하여야 함
- 화면표시 호환성 확보: 모바일 기기에서 웹페이지는 PC화면 기준이 아닌 모바일용 화면으로
  표시되어야 함
- PC 콘텐츠 기능 동등성: PC에서 제공하는 웹페이지(로그인, 민원 등의 웹콘텐츠)를 모바일 웹페이지에서 제공하여야 함

## **웹 접근성**

---

### 인식의 용이성

- 적절한 대체 텍스트 제공: 텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체 텍스트를 제공해야 함
- 자막 제공: 멀티미디어 콘텐츠에는 자막, 대본 또는 수화를 제공해야 함
- 색에 무관한 콘텐츠 인식 콘텐츠는 색에 관계없이 인식될 수 있어야 함
- 명확한 지시사항 제공 지시사항은 모양, 크기, 위치, 방향, 색, 소리 등에 관계없이 인식될 수 있어야 함
- 텍스트 콘텐츠의 명도, 대비: 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5
  대 1 이상이어야 함
- 자동 재생 금지: 자동으로 소리가 재생되지 않아야 함
- 콘텐츠 간의 구분: 이웃한 콘텐츠는 구별될 수 있어야 함


### 운용의 용이성

- 키보드 사용 보장: 키보드 사용 보장 모든 기능은 키보드만으로도 사용할 수 있어야 함
- 초점 이동: 키보드에 의한 초점은 논리적으로 이동해야 하며 시각적으로 구별할 수 있어야 함
- 조작 가능: 사용자 입력 및 컨트롤은 조작 가능하도록 제공되어야 함
- 충분한 시간 제공: 응답시간 조절 시간제한이 있는 콘텐츠는 응답시간을 조절할 수 있어야 함
- 정지 기능 제공 자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 함
- 깜빡임과 번쩍임 사용 제한(광과민성 발작 예방): 초당 3~50회 주기로 깜빡이거나 번쩍이는
  콘텐츠를 제공하지 않아야 함
- 쉬운 내비게이션: 반복영역 건너뛰기 콘텐츠의 반복되는 영역은 건너뛸 수 있어야
  함
- 제목 제공: 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 함
- 적절한 링크 텍스트: 링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 함


### 이해의 용이성

- 기본 언어 표시: 주로 사용하는 언어를 명시해야 함
- 사용자 요구에 따른 실행: 사용자가 의도하지 않은 기능(새창, 초점에 의한 맥락변화 등)
- 콘텐츠의 선형 구조: 콘텐츠는 논리적인 순서로 제공해야 함
- 표의 구성: 표는 이해하기 쉽게 구성해야 함
- 레이블 제공: 사용자 입력에는 대응하는 레이블을 제공해야 함
- 오류 정정 입력: 오류를 정정할 수 있는 방법을 제공해야 함


### 견고성

- 마크업 오류 방지: 마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 함
- 웹 애플리케이션 접근성 준수: 콘텐츠에 포함된 웹 애플리케이션은 접근성이 있어야 함

## **웹 개방성**

---

- 검색 로봇 접근: 웹사이트는 로봇 배제 표준에 따른 검색 로봇 접근을 제한하지 않도록
  개방되어 있어야 함


## **웹 접속성**

---

### PC 웹 접속성

- 웹페이지 응답속도: 웹사이트 메인 페이지는 적절한 속도로 로딩되어야 함
- 웹페이지 용량: 웹사이트 메인 페이지의 용량은 적절한 크기로 제공되어야 함


### 모바일 웹 접속성

- 모바일 웹페이지 응답속도 모바일 웹사이트 메인 페이지는 적절한 속도로 로딩되어야 함
- 모바일 웹페이지 용량 모바일 웹사이트 메인 페이지의 용량은 적절한 크기로 제공되어야 함


## **~~웹 편의성~~ (평가 불가)**

---

> 전자정부 웹사이트 품질관리 가이드 평가기준에는 웹 편의성을 수치화하여 평가할 수 있는 정확한 척도가 명시되어있지 않습니다. 또한 웹 편의성 평가 항목들 중 대다수가 UX(User experience) 요소 및 심미적 요소가 포함되어 있기 때문에 자동화하여 검사하더라도 신뢰성을 검증할 수 없습니다.

평가가 어려운 항목 예시

- 관련 콘텐츠 목록 주변에 광고배너 또는 시선을 끄는 요소가 배치되지 않도록 하여야 함
- 내역을 적절하게 구조화하여 제공하여야 함
- 담당업무는 쉬운 용어로 간결하게 제공하여야 함₩
- 직원 목록에 직원의 이름, 부서, 담당업무, 연락처를 표시하여야 함
- 확인은 심각하거나 취소가 어려운 행동에 사용하여야 함
- 기타등등 …


## **~~웹 효율성~~ (평가 불가)**

---

> Session, 페이지뷰, 자료제공 건수 등은 클라이언트에서 확인이 불가하고, 서버에서 확인해야 합니다.

- 월평균 페이지뷰 수: 최근 1년간 월평균, 웹페이지를 열어본 횟수 20,000건 이하 (동일 페이지를 반복하여 열어본 횟수도 모두 카운트함)
- 월평균 방문자 수: 최근 1년간 월평균 웹사이트의 방문자 수 5,000명 이하 (동일인 여부와 상관없이 열린 세션(session) 수를 기준으로 함)
- 연간 자료제공 건수: 최근 1년간 게시물 등록 건수 1,000건 미만(공지사항, 정책홍보, 간행물, 문의에 대한 답글 등)
- 연간 국민참여 건수: 최근 1년간 국민‧기업‧이해관계자 등의 게시물 등록 건수 1,000건 미만 (동일인 여부와 상관없이 의견, 질의, 민원등록, 신고, 게시글 등)


## **~~웹 신뢰성~~ (평가 불가)**

---

> 자료 최신화 / 정보 오류 및 부정확한 정보 / 게시물 관리 등은 자동화하여 검사할 수 없습니다.

### 자료 최신화

- 웹사이트에 게재된 기관 및 직원 현황(조직도, 담당자 연락처 등)
- 지식재산권 보호 및 개인정보보호: 웹사이트에서 제공하고 있는 그림, 사진, 저작물 등의 정보를 등재할 때, 지식재산권의 도용, 개인정보 유출, 명예훼손 등 문제가 발생하지 않도록 정보 출처, 활용범위 등 기재
- 저작권을 침해하거나 개인정보보호 위반 게시물 등 점검


### 정보 오류 및 부정확한 정보

- 외부 기관에서 제공하는 콘텐츠를 웹사이트에 게재할 경우, 해당 정보가 국민 정서에 맞지 않거나 정부 정책을 제대로 반영하고 있는지 확인하고 게시
- 지도서비스 제공 시, 독도 및 동해 표기 등 우리나라 영토 표기를 제대로 하고
  있는지 확인 후 게시
- 외부기관에서 제공하는 콘텐츠를 링크 방식으로 제공할 경우, 단절(Dead Link)
  이 발생하는지 확인 후 조치

### 게시물 관리

- 웹사이트에 게재되는 모든 정보에 대하여 타인의 명예 손상, 사생활 침해 등
  불법정보 점검
- 이용자가 게시판 등에 자료를 게재할 수 있는 서비스를 제공하는 경우, 유통금지 정보 등의 점검을 포함한 사용자의 의무, 조치할 사항 등 필요한 내용과 절차 등을 구체적으로 제공
- 유해게시물(음란물, 안마 시술 홍보 등 불건전한 내용) 삭제
- 개인 영리 목적의 상업성 광고, 판매 목적의 민간 광고물은 삭제
- 동일 / 유사 내용을 반복하여 게재하는 도배성 글 삭제
- 특정기관(단체, 부서)을 근거없이 비난하는 경우, 특정인을 비방(비속어, 은어 사용 등 포함)하거나 명예훼손의 우려가 있는 게시글 점검

## **진단 지표(배점)**

---

## **호환성**

---

1. HTML배점(30점) - HTML문법 오류 당 -1점
2. 최신 웹표준(HTML5)을 적용하지 않은 페이지 있으면 -1점
3. CSS배점(20점) – CSS문법 오류 당 -1점
4. UTF-8 미적용 시 -1점
5. JS배점(6점) - Js 혹은 DOM 경고 당 -1점
6. 공공 웹사이트 플러그인 있을 시 -2점
7. 기능 호환성(20점) 모든 브라우저에서 기능이 동작하는지 확인하고 아닐 시 -20점
8. 표시 호환성(20점) 모든 브라우저에서 동일하게 표현되는지 확인하고 아닐 시 -20점


(시범 적용, 감점 없음)

1. 모바일 웹 기능 호환성
2. 모바일 웹 화면표시 호환성
3. PC 콘텐츠기능 동등성

## **접근성**

---

### 인식의 용이성

- 적절한 대체 텍스트 제공 +10
- 자막 제공(멀티미디어 콘텐츠) +4
- 색에 무관한 콘텐츠 인식 +3
- 명확한 지시 사항 제공 +2
- 텍스트 콘텐츠의 명도 대비 +6
- 자동재생 금지(멀티미디어 콘텐츠, 재생 가능 콘텐츠) +2
- 콘텐츠 간의 구분 +3


### 운용의 용이성

1. 키보드 사용 보장 +6
2. 초점 이동 +6
3. 조작 가능 +3
4. 응답 시간 조절(시간제한 콘텐츠) +2
5. 정지기능 제공(움직이는 콘텐츠) +4
6. 깜빡임과 번쩍임 사용 제한 +2
7. 반복 영역 건너뛰기 +5
8. 제목 제공 +6
9. 적절한 링크 텍스트 +4


### 이해의 용이성

1. 기본 언어 표시 +4
2. 사용자 요구에 따른 실행 +5
3. 콘텐츠의 선형 구조 +3
4. 표의 구성(테이블 콘텐츠) +6
5. 레이블 제공(온라인 서식) +6
6. 오류 정정(온라인 서식) +4


### 견고성

1. 마크업 오류 방지 +4

## **개방성**

---

- 완전허용 robots.txt 존재하지 않음 검색엔진 차단 안함 100점
- 완전허용 User-agent: \* Allow: / 검색엔진 차단 안함 100점
- 완전차단 User-agent: \* Disallow: / 모든 검색엔진 차단 0점
- 부분차단 User-agent: \* Disallow: /cgi-bin/ 일부 디렉토리에 대하여 검색엔진 차단 0점


## **접속성**

---

- 웹사이트 응답 속도 최소화(로딩속도) - 3초 이하 50점, 5초 이하 25점, 5초 초과 0점
- 웹사이트 응답 속도 최소화(페이지 용량) - 3MB 이하 50점, 5MB 이하 25점, 5MB 초과 0점

시범진단(점수 없음)

- 모바일 웹사이트 응답 속도 최소화(로딩속도)
- 모바일 웹사이트 응답 속도 최소화(페이지 용량)


# Lighthouse

> Lighthouse 기준: Performance, Accessibility, Best Practices, SEO


## 평가 기준

---

## **Performance**

- [**FCP(First Contentful Paint)**](https://web.dev/first-contentful-paint/?utm_source=lighthouse&utm_medium=devtools)
- [**Time to Interactive**](https://web.dev/interactive/?utm_source=lighthouse&utm_medium=devtools)
- **[Speed index](https://web.dev/speed-index/)**
- [**Total Blocking Time**](https://web.dev/lighthouse-total-blocking-time/?utm_source=lighthouse&utm_medium=devtools)
- **[Largest Contentful Paint](https://web.dev/lcp/)**
- **[Cumulative Layout shift](https://web.dev/cls/)**
- Eliminate render-blocking resources
- Properly size images
- Avoid an excessive DOM size
- Serve static assets with an efficient cache policy
- Avoid chaining critical requests
- User Timing marks and measures 1 user timingKeep request counts low and transfer sizes small
- Largest Contentful Paint element
- Avoid large layout shifts
- Avoid long main-thread tasks
- Defer offscreen images
- Minify CSS
- Minify JavaScript
- Reduce unused CSS
- Efficiently encode images
- Enable text compression
- Preconnect to required origins
- Initial server response time was short
- Avoid multiple page redirectsPreload key requests
- Use HTTP/2
- Use video formats for animated content
- Remove duplicate modules in JavaScript bundles
- Avoid serving legacy JavaScript to modern browsers
- Preload Largest Contentful Paint image
- Avoids enormous network payloads
- JavaScript execution time
- Minimizes main-thread work
- All text remains visible during webfont loads
- Minimize third-party usage
- Lazy load third-party resources with facades
- Largest Contentful Paint image was not lazily loaded
- Uses passive listeners to improve scrolling performance
- Avoids document.write()
- Avoid non-composited animations Image elements have explicit width and height
- Has a <meta name="viewport"> tag with width or initial-scale
  <br/>
  <br/>

## **Accessibility**

- `[aria-hidden="true"]` is not present on the document `<body>`
- [role]s have all required `[aria-*]` attributes
- Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.
- `[role]`s are contained by their required parent element
- `[role]` values are valid
- `[aria-*]` attributes have valid values
- `[aria-*]` attributes are valid and not misspelled
- Buttons have an accessible name
- ARIA IDs are unique
- Image elements have `[alt]` attributes
- Form elements have associated labels
- `[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5.
- `[aria-hidden="true"]` elements do not contain focusable descendents
- The page contains a heading, skip link, or landmark region
- Background and foreground colors have a sufficient contrast ratio
- Document has a `<title>` element
- `[id]` attributes on active, focusable elements are unique
- `<html>` element has a `[lang]` attribute
- `<html>` element has a valid value for its `[lang]` attribute
- Links have a discernible name
- Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).
- List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements
- No element has a `[tabindex]` value greater than 0
- `[accesskey]` values are unique
- button, link, and menuitem elements have accessible names
- ARIA input fields have accessible names
- ARIA meter elements have accessible names ARIA progressbar elements have accessible names
- ARIA toggle fields have accessible names ARIA tooltip elements have accessible names
- ARIA treeitem elements have accessible names `<dl>`'s contain only properly-ordered `<dt>` and`<dd>` groups, `<script>`, `<template>` or `<div>` elements.
- Definition list items are wrapped in `<dl>` elements
- No form fields have multiple labels `<frame>` or `<iframe>` elements have a title
- `<input type="image">` elements have `[alt]` text
- The document does not use `<meta http-equiv="refresh">`
- `object` elements have alternate text
- Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.
- `<th>` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe.
- `[lang]` attributes have a valid value `<video>` elements contain a `<track>` element with `[kind="captions"]`
  <br/>
  <br/>

## **Best practices**

- Serves images with low resolution
- Uses HTTPS
- Ensure CSP is effective against XSS attacks
- Avoids requesting the geolocation permission on page load
- Avoids requesting the notification permission on page load
- Avoids front-end JavaScript libraries with known security vulnerabilities
- Allows users to paste into password fields
- Displays images with correct aspect ratioPage has the HTML doctype
- Properly defines charsetAvoids deprecated APIs
- No browser errors logged to the console
- No issues in the `Issues` panel in Chrome Devtools
- Page has valid source maps
- Fonts with `font-display: optional` are preloaded


## **SEO**

- Links do not have descriptive text
- Links are not crawlable
- Structured data is valid
- Has a `<meta name="viewport">` tag with `width` or `initial-scale`
- Document has a `<title>` element
- Document has a meta description
- Page has successful HTTP status code
- Page isn’t blocked from indexing
- robots.txt is validImage elements have `[alt]` attributes
- Document has a valid `hreflang`Document avoids plugins
- Document has a valid `rel=canonical`
- Document uses legible font sizes
- Tap targets are sized appropriately
