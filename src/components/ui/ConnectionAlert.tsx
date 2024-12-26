import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function ConnectionAlert() {
  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-yellow-50 dark:bg-yellow-900/50 p-4 rounded-lg shadow-lg border border-yellow-200 dark:border-yellow-800">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          请点击右上角的 "Connect to Supabase" 按钮完成配置
        </p>
      </div>
    </div>
  );
}