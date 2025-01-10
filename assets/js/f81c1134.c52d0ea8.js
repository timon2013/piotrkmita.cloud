"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[8130],{7735:a=>{a.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"amazon-console-to-code","metadata":{"permalink":"/blog/amazon-console-to-code","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-13-consoletocode/index.mdx","source":"@site/blog/2024-10-13-consoletocode/index.mdx","title":"Nowa us\u0142uga Console-to-Code do Amazon AWS","description":"AWS wprowadzi\u0142 us\u0142ug\u0119 Console-to-Code, kt\xf3ra umo\u017cliwia u\u017cytkownikom \u0142atwe przekszta\u0142canie dzia\u0142a\u0144 wykonywanych w konsoli AWS w kod, co znacznie u\u0142atwia proces automatyzacji i wdra\u017cania aplikacji. Oto jak dzia\u0142a ta us\u0142uga i jak mo\u017cna z niej korzysta\u0107.","date":"2024-10-13T00:00:00.000Z","tags":[{"inline":true,"label":"amazon aws","permalink":"/blog/tags/amazon-aws"},{"inline":true,"label":"amazon","permalink":"/blog/tags/amazon"},{"inline":true,"label":"ai","permalink":"/blog/tags/ai"},{"inline":true,"label":"aws","permalink":"/blog/tags/aws"},{"inline":true,"label":"cli","permalink":"/blog/tags/cli"},{"inline":true,"label":"code","permalink":"/blog/tags/code"}],"readingTime":1.75,"hasTruncateMarker":true,"authors":[{"name":"Piotr Kmita","title":"Maintainer of site","url":"https://github.com/timon2013/","imageURL":"https://github.com/timon2013.png","key":"pkmita","page":null}],"frontMatter":{"slug":"amazon-console-to-code","title":"Nowa us\u0142uga Console-to-Code do Amazon AWS","authors":["pkmita"],"tags":["amazon aws","amazon","ai","aws","cli","code"]},"unlisted":false,"nextItem":{"title":"Wyzwanie Amazon Q dla programist\xf3w","permalink":"/blog/amazon-q-developer-code-challenge"}},"content":"AWS wprowadzi\u0142 us\u0142ug\u0119 **Console-to-Code**, kt\xf3ra umo\u017cliwia u\u017cytkownikom \u0142atwe przekszta\u0142canie dzia\u0142a\u0144 wykonywanych w konsoli AWS w kod, co znacznie u\u0142atwia proces automatyzacji i wdra\u017cania aplikacji. Oto jak dzia\u0142a ta us\u0142uga i jak mo\u017cna z niej korzysta\u0107.\\n\x3c!--truncate--\x3e\\n## Jak dzia\u0142a Console-to-Code?\\n\\n1. **Rejestracja dzia\u0142a\u0144**: Console-to-Code automatycznie rejestruje wszystkie dzia\u0142ania u\u017cytkownika w konsoli AWS, takie jak tworzenie instancji EC2 czy konfiguracja VPC. U\u017cytkownik wykonuje standardowe operacje w konsoli, a system rejestruje te akcje.\\n\\n2. **Generowanie kodu**: Po zako\u0144czeniu dzia\u0142a\u0144 u\u017cytkownik mo\u017ce przej\u015b\u0107 do panelu Console-to-Code, gdzie mo\u017ce wybra\u0107 konkretne akcje do przekszta\u0142cenia w kod. Us\u0142uga generuje kod w preferowanym formacie, takim jak:\\n   - **AWS CloudFormation** (JSON lub YAML)\\n   - **AWS CDK** (Java, Python, TypeScript)\\n\\n   **Natomiast wcze\u015bniej trzeba w\u0142\u0105czy\u0107 nagrywanie \\"Start recording\\".**\\n   Poni\u017cej zobaczycie jak to wygl\u0105da, b\u0119d\u0105c w us\u0142udze EC2:\\n\\n[ ![alt text](./ConsoleToCode.png) ](./ConsoleToCode.png)\\n\\n3. **Personalizacja kodu**: Wygenerowany kod mo\u017ce by\u0107 u\u017cyty jako punkt wyj\u015bcia do dalszej personalizacji i dostosowania do specyficznych potrzeb produkcyjnych. U\u017cytkownicy s\u0105 zach\u0119cani do przetestowania i weryfikacji wygenerowanego kodu przed jego wdro\u017ceniem.\\n\\n## Jak korzysta\u0107 z Console-to-Code?\\n\\n### Krok po kroku:\\n\\n1. **Zaloguj si\u0119 do konsoli AWS**: Upewnij si\u0119, \u017ce jeste\u015b w regionie **US East (N. Virginia)**, jest to do\u015b\u0107 nowa us\u0142uga i mo\u017ce nie by\u0107 dost\u0119pna we wszystkich regionach.\\n\\n2. **Otw\xf3rz panel Console-to-Code**: Rozpocznij proces nagrywania \\"Start recodrding\\". Console to code znajdziesz w prawym g\xf3rnym rogu.\\n\\n3. **Wybierz us\u0142ug\u0119 EC2**: Rozpocznij proces, na przyk\u0142ad przez uruchomienie instancji EC2.\\n\\n4. **Wybierz akcje do przekszta\u0142cenia**: Zaznacz dzia\u0142ania, kt\xf3re chcesz uwzgl\u0119dni\u0107 w wygenerowanym kodzie (maksymalnie 5 akcji na raz).\\n\\n5. **Generuj kod**: Kliknij przycisk generowania kodu i wybierz preferowany format.\\n\\n6. **Pobierz lub skopiuj kod**: Po wygenerowaniu mo\u017cesz skopiowa\u0107 lub pobra\u0107 kod do dalszej edycji.\\n\\n### Ograniczenia\\n\\n- Us\u0142uga jest obecnie dost\u0119pna tylko dla akcji zwi\u0105zanych z Amazon EC2, Amazon VPC i Amazon RDS.\\n- Mo\u017cliwo\u015b\u0107 rejestracji dzia\u0142a\u0144 jest ograniczona do pi\u0119ciu akcji na sesj\u0119.\\n- Wygenerowany kod wymaga dalszej personalizacji przed u\u017cyciem w produkcji.\\n\\n## Podsumowanie\\n\\nAWS Console-to-Code to innowacyjne narz\u0119dzie, kt\xf3re \u0142\u0105czy prostot\u0119 korzystania z konsoli z moc\u0105 Infrastructure-as-Code (IaC). Umo\u017cliwia u\u017cytkownikom \u0142atwe przej\u015bcie od prototypowania do produkcji, co czyni go cennym dodatkiem dla deweloper\xf3w i in\u017cynier\xf3w DevOps."},{"id":"amazon-q-developer-code-challenge","metadata":{"permalink":"/blog/amazon-q-developer-code-challenge","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-06-amazonq/index.mdx","source":"@site/blog/2024-09-06-amazonq/index.mdx","title":"Wyzwanie Amazon Q dla programist\xf3w","description":"Amazon Q Developer Code Challenge","date":"2024-09-06T00:00:00.000Z","tags":[{"inline":true,"label":"amazon q","permalink":"/blog/tags/amazon-q"},{"inline":true,"label":"amazon","permalink":"/blog/tags/amazon"},{"inline":true,"label":"ai","permalink":"/blog/tags/ai"},{"inline":true,"label":"gen ai","permalink":"/blog/tags/gen-ai"},{"inline":true,"label":"challenge","permalink":"/blog/tags/challenge"}],"readingTime":0.335,"hasTruncateMarker":true,"authors":[{"name":"Piotr Kmita","title":"Maintainer of site","url":"https://github.com/timon2013/","imageURL":"https://github.com/timon2013.png","key":"pkmita","page":null}],"frontMatter":{"slug":"amazon-q-developer-code-challenge","title":"Wyzwanie Amazon Q dla programist\xf3w","authors":["pkmita"],"tags":["amazon q","amazon","ai","gen ai","challenge"]},"unlisted":false,"prevItem":{"title":"Nowa us\u0142uga Console-to-Code do Amazon AWS","permalink":"/blog/amazon-console-to-code"},"nextItem":{"title":"Odkryj moc Amazon Q","permalink":"/blog/discover-power-amazon-q"}},"content":"### Amazon Q Developer Code Challenge\\n\\nAmazon Q Developer Code Challenge, zorganizowany podczas AWS Summit 2024, to rywalizacja mi\u0119dzy zespo\u0142em korzystaj\u0105cym z asystenta AI, Amazon Q Developer, a zespo\u0142em koduj\u0105cym r\u0119cznie.\\n\\n\x3c!--truncate--\x3e\\n Zesp\xf3\u0142 wspomagany AI wykaza\u0142 si\u0119 wi\u0119ksz\u0105 wydajno\u015bci\u0105, szybciej realizuj\u0105c z\u0142o\u017cone zadania dzi\u0119ki podpowiedziom generowanym przez narz\u0119dzie. Wydarzenie pokaza\u0142o, jak AI mo\u017ce znacz\u0105co zwi\u0119kszy\u0107 produktywno\u015b\u0107 w programowaniu, wspieraj\u0105c kodowanie i rozwi\u0105zywanie problem\xf3w. \\n\\nWi\u0119cej informacji znajdziesz [tutaj](https://aws.amazon.com/blogs/devops/amazon-q-developer-code-challenge/)."},{"id":"discover-power-amazon-q","metadata":{"permalink":"/blog/discover-power-amazon-q","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-23-amazonq/index.mdx","source":"@site/blog/2024-07-23-amazonq/index.mdx","title":"Odkryj moc Amazon Q","description":"Odkryj moc Amazon Q","date":"2024-07-23T00:00:00.000Z","tags":[{"inline":true,"label":"amazon q","permalink":"/blog/tags/amazon-q"},{"inline":true,"label":"amazon","permalink":"/blog/tags/amazon"},{"inline":true,"label":"visual studio code","permalink":"/blog/tags/visual-studio-code"},{"inline":true,"label":"ai","permalink":"/blog/tags/ai"},{"inline":true,"label":"gen ai","permalink":"/blog/tags/gen-ai"}],"readingTime":2.085,"hasTruncateMarker":true,"authors":[{"name":"Piotr Kmita","title":"Maintainer of site","url":"https://github.com/timon2013/","imageURL":"https://github.com/timon2013.png","key":"pkmita","page":null}],"frontMatter":{"slug":"discover-power-amazon-q","title":"Odkryj moc Amazon Q","authors":["pkmita"],"tags":["amazon q","amazon","visual studio code","ai","gen ai"]},"unlisted":false,"prevItem":{"title":"Wyzwanie Amazon Q dla programist\xf3w","permalink":"/blog/amazon-q-developer-code-challenge"},"nextItem":{"title":"Witaj","permalink":"/blog/welcome"}},"content":"### Odkryj moc Amazon Q\\n\\nAmazon niedawno zaprezentowa\u0142 Amazon Q, pot\u0119\u017cnego asystenta opartego na generatywnej AI, kt\xf3ry ma na celu zrewolucjonizowanie sposobu, w jaki funkcjonuj\u0105 przedsi\u0119biorstwa. To innowacyjne narz\u0119dzie, kt\xf3re jest ju\u017c dost\u0119pne, ma usprawni\u0107 procesy i zwi\u0119kszy\u0107 produktywno\u015b\u0107 w r\xf3\u017cnych bran\u017cach.\\n\\n\x3c!--truncate--\x3e\\n#### Czym jest Amazon Q?\\n\\nAmazon Q to asystent wykorzystuj\u0105cy generatywn\u0105 AI, kt\xf3ry korzysta z zaawansowanych modeli uczenia maszynowego, aby wspiera\u0107 szeroki zakres aplikacji biznesowych. Oferuje on zaawansowane mo\u017cliwo\u015bci automatyzacji zada\u0144, dostarczania informacji i usprawniania proces\xf3w decyzyjnych. Niezale\u017cnie od tego, czy potrzebujesz zbudowa\u0107 w\u0142asne aplikacje AI, czy zintegrowa\u0107 AI z istniej\u0105cymi procesami, Amazon Q dostarcza kompleksowe rozwi\u0105zanie.\\n\\n#### Kluczowe Funkcje\\n\\n1. **Amazon Q Apps**: Ta funkcja pozwala firmom tworzy\u0107 aplikacje zasilane przez AI, dostosowane do ich specyficznych potrzeb. U\u017cytkownicy mog\u0105 tworzy\u0107 aplikacje u\u017cywaj\u0105c naturalnego j\u0119zyka i zatwierdzonych \u017ar\xf3de\u0142 danych, co u\u0142atwia wdra\u017canie rozwi\u0105za\u0144 generatywnej AI bez g\u0142\u0119bokiej wiedzy technicznej.\\n\\n2. **Integracja z SageMaker Studio**: Programi\u015bci mog\u0105 teraz korzysta\u0107 z Amazon Q w ramach SageMaker Studio, czerpi\u0105c korzy\u015bci z dostosowanych sugestii kodu i zaawansowanych narz\u0119dzi zwi\u0119kszaj\u0105cych produktywno\u015b\u0107. Ta integracja upraszcza rozwijanie i wdra\u017canie modeli AI.\\n\\n3. **Zaawansowane Mo\u017cliwo\u015bci AI**: Amazon Q oferuje takie funkcje jak spersonalizowane odpowiedzi na podstawie profili pracownik\xf3w, mo\u017cliwo\u015b\u0107 ekstrakcji informacji ze skanowanych PDF-\xf3w i obraz\xf3w oraz nowe API do programowego zarz\u0105dzania aplikacjami.\\n\\n4. **Bezpiecze\u0144stwo i Zgodno\u015b\u0107**: Dzi\u0119ki podej\u015bciu skoncentrowanemu na bezpiecze\u0144stwie, Amazon Q zapewnia, \u017ce wszystkie interakcje AI i dane s\u0105 przetwarzane zgodnie z najwy\u017cszymi standardami prywatno\u015bci i zgodno\u015bci, co czyni go odpowiednim do u\u017cycia w bran\u017cach regulowanych.\\n\\n#### Dlaczego Wybra\u0107 Amazon Q?\\n\\nAmazon Q wyr\xf3\u017cnia si\u0119 jako wszechstronny i solidny asystent AI, kt\xf3ry mo\u017cna \u0142atwo zintegrowa\u0107 z r\xf3\u017cnymi procesami biznesowymi. Jego zdolno\u015b\u0107 do automatyzacji i usprawniania zada\u0144 oszcz\u0119dza czas i zasoby, pozwalaj\u0105c pracownikom skupi\u0107 si\u0119 na bardziej strategicznych dzia\u0142aniach. Ponadto, jego bezproblemowa integracja z istniej\u0105cymi narz\u0119dziami i us\u0142ugami AWS zapewnia, \u017ce firmy mog\u0105 wykorzysta\u0107 swoj\u0105 obecn\u0105 infrastruktur\u0119, aby w pe\u0142ni korzysta\u0107 z technologii generatywnej AI.\\n\\nPodsumowuj\u0105c, Amazon Q to nie tylko asystent AI; to kompleksowe narz\u0119dzie zaprojektowane, aby nap\u0119dza\u0107 innowacje i efektywno\u015b\u0107 w nowoczesnych \u015brodowiskach biznesowych. Dzi\u0119ki zaawansowanym funkcjom i przyjaznym dla u\u017cytkownika mo\u017cliwo\u015bciom, Amazon Q ma szans\u0119 sta\u0107 si\u0119 nieocenionym zasobem dla firm pragn\u0105cych wykorzysta\u0107 moc AI.\\n\\nSam u\u017cywam Amazon Q zintegrowanego z Visual Studio Code. Przyspiesza mi to pisanie skrypt\xf3w, cho\u0107 czasami bywa to nieco irytuj\u0105ce. Je\u015bli masz ochot\u0119 r\xf3wnie\u017c tego u\u017cywa\u0107 w swoim \u015brodowisku, podrzucam Ci oficjaln\u0105 dokumentacj\u0119: [AWS Toolkit dla Visual Studio Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html).\\n\\nDzi\u0119ki tej integracji, mo\u017cesz zwi\u0119kszy\u0107 swoj\u0105 produktywno\u015b\u0107 i efektywno\u015b\u0107 w codziennej pracy programistycznej, korzystaj\u0105c z zaawansowanych funkcji AI bezpo\u015brednio w Visual Studio Code."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-06-welcome/index.mdx","source":"@site/blog/2024-05-06-welcome/index.mdx","title":"Witaj","description":"Witaj na mojej stronie! To pierwszy wpis na tym blogu, i mam nadziej\u0119, \u017ce nie ostatni :)","date":"2024-05-06T00:00:00.000Z","tags":[{"inline":true,"label":"welcome","permalink":"/blog/tags/welcome"},{"inline":true,"label":"hello","permalink":"/blog/tags/hello"},{"inline":true,"label":"site","permalink":"/blog/tags/site"},{"inline":true,"label":"blog","permalink":"/blog/tags/blog"}],"readingTime":0.305,"hasTruncateMarker":true,"authors":[{"name":"Piotr Kmita","title":"Maintainer of site","url":"https://github.com/timon2013/","imageURL":"https://github.com/timon2013.png","key":"pkmita","page":null}],"frontMatter":{"slug":"welcome","title":"Witaj","authors":["pkmita"],"tags":["welcome","hello","site","blog"]},"unlisted":false,"prevItem":{"title":"Odkryj moc Amazon Q","permalink":"/blog/discover-power-amazon-q"}},"content":"Witaj na mojej stronie! To pierwszy wpis na tym blogu, i mam nadziej\u0119, \u017ce nie ostatni :)\\n\\nZdecydowa\u0142em si\u0119 stworzy\u0107 prost\u0105 stron\u0119, kt\xf3r\u0105 b\u0119d\u0119 m\xf3g\u0142 utrzyma\u0107 i zarz\u0105dza\u0107 bez wi\u0119kszego nak\u0142adu czasu. Wcze\u015bniej korzysta\u0142em g\u0142\xf3wnie z systemu Wordpress, ale tym razem postawi\u0142em na rozwi\u0105zanie Docusaurus.io. Pozwala mi to na integracj\u0119 ze \u015brodowiskiem Github oraz na pisanie post\xf3w za pomoc\u0105 Markdown.\\n\\n\x3c!--truncate--\x3e"}]}}')}}]);