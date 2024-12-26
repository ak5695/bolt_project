import React from 'react';
import { useParams } from 'react-router-dom';
import { CodeBlock } from '../components/code/CodeBlock';
import { CommentSection } from '../components/comments/CommentSection';
import { effectsData } from '../data/effectsData';

export function EffectDetail() {
  const { id } = useParams();
  const effect = effectsData.find(e => e.id === id);

  if (!effect) {
    return <div>效果不存在</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">{effect.title}</h2>
      
      <div className="mb-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <effect.component />
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">效果说明</h3>
          <p className="text-gray-700 dark:text-gray-300">{effect.description}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">代码实现</h3>
          <CodeBlock code={effect.code} language="tsx" />
        </section>

        <CommentSection />
      </div>
    </div>
  );
}