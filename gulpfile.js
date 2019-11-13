var gulp = require('gulp');
// 要实现的命令名
const taskList = [
  'navigation-bar', // 移动navigation-bar组件到演示示例中更新演示文件
  'hand-guide', // 移动hadn-guide组件到演示示例中更新演示文件
  'common-dialog', // 移动common-dialog组件到演示示例中更新演示文件
  'ring_progress_bar', // 移动ring_progress_bar组件到演示示例中更新演示文件
  'submit-formid', // 移动submit-formid组件到演示示例中更新演示文件
  'ring-progress-bar-canvas', // 移动ring-progress-bar-canvas组件到演示示例中更新演示文件
  'common_storage', // 移动common_storage代码段到演示示例中更新演示文件
  'create_posters' // 移动create_posters代码段到演示示例中更新演示文件
];

for(let i=0,len=taskList.length; i<len; i++) {
  gulp.task(taskList[i], function() {
    return gulp.src(`./${taskList[i]}/src/**/*.*`)
    .pipe(gulp.dest(`./${taskList[i]}/demo/src/`))
  })
}