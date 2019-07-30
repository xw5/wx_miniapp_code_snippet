var gulp = require('gulp');
// 要实现的命令名
const taskList = [
  'navigation-bar', // 移动navigation-bar文件到演示示例中更新演示文件
  'hand-guide' // 移动hadn_guide文件到演示示例中更新演示文件
];

for(let i=0,len=taskList.length; i<len; i++) {
  gulp.task(taskList[i], function() {
    return gulp.src(`./${taskList[i]}/src/**/*.*`)
    .pipe(gulp.dest(`./${taskList[i]}/dome/src/`))
  })
}