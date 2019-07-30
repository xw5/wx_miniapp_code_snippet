var gulp = require('gulp');
// 要实现的命令名
const inDirList = [
  'navbar' // 移动navigation-bar文件到演示示例中更新演示文件
];
// 对应命令的输出目录
const outDirList = [
  'navigation-bar'
];

for(let i=0,len=inDirList.length; i<len; i++) {
  gulp.task(inDirList[i], function() {
    return gulp.src(`./${outDirList[i]}/src/**/*.*`)
    .pipe(gulp.dest(`./${outDirList[i]}/dome/src/`))
  })
}