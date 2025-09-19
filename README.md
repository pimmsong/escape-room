# 방탈출 프로젝트

방탈출 테마 내에서 사용될 화면을 구현한다.

- 로그인화면, 메일리스트 페이지로 구성된다.
- 보낸메일함, 스팸메일함만 클릭이 가능하다.

## 프로젝트 내려받고 개발서버 실행하기

1. vscode (개발 에디터) 에서 프로젝트를 내려받는다. 한 번 받아서 계속 수정해서 사용할 수 있다.

```
 git clone https://github.com/pimmsong/escape-room.git
```

2. 프로젝트 터미널 창을 열어 아래 명령어를 실행한다.

```
  yarn dev
```

3. 브라우저에서 localhost:5173 으로 접속한다.

## 폴더 구성

**/src/pages**
페이지들이 있는 폴더

**/src/features**
기능 단위의 컴포넌트들이 있다. login, mail로 구성된다.
대부분 기능과 로직들이 이 폴더 안에 있다.

**/src/shared**
공통 텀포넌트 폴더

**/src/assets**
이미지, 아이콘 저장하는 폴더 (주로 svg)

정적 이미지 같은 경우엔 (jpg, png 등) public 폴더 안에 넣고 사용하시면 됩니다.

## 배포

vercel 이용.
main 브랜치 코드를 수정하면 자동 배포된다.
URL - https://escape-room-sooty-ten.vercel.app

## 메일 데이터 수정하는 방법

**수정 파일 경로**
받은메일함 - /src/features/mail/data/inbox.ts
스팸메일함 - /src/features/mail/data/spam.ts

해당 파일 안에서 작성 가능.
