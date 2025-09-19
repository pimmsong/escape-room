# 방탈출 프로젝트

방탈출 테마 내에서 사용될 화면을 구현한다.

## 프로젝트 내려받고 개발서버 실행하기

1. vscode (개발 에디터) 에서 프로젝트를 내려받는다. (1회만 실행)

```
 git clone https://github.com/pimmsong/escape-room.git
```

2. 프로젝트 터미널 창을 열어 아래 명령어를 실행한다.

```
  yarn dev
```

3. 브라우저에서 localhost:5173 으로 접속한다.

## 배포

vercel 를 이용하여 배포 한다.
URL - https://escape-room-bbosongs-projects.vercel.app

## 메일 데이터 수정하는 방법

**수정 파일 경로**
받은메일함 - /src/features/mail/data/inbox.ts
스팸메일함 - /src/features/mail/data/spam.ts
