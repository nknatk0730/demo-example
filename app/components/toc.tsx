'use client';

import { useEffect } from "react";
import * as tocbot from 'tocbot';


export const Toc = ({
  id,
}: {
  id: string;
}) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: "#" + id, //　目次を追加する class 名
      contentSelector: ".content", // 目次を取得するコンテンツの class 名
      headingSelector: "h1, h2, h3, h4", // 目次として取得する見出しタグ
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, [id]);

  return <nav id={id} className="[&_a]:bg-sky-500" />;
};