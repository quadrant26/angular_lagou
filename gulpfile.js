var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath : 'src/',
    devPath : 'build/',
    prdPath : 'dist/'
};

gulp.task('lib', function (){
    gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest(app.devPath + 'vendor'))
    .pipe(gulp.dest(app.prdPath + 'vendor')) // 发布到成产环境
    .pipe($.connect.reload());  // 刷新浏览器
})

gulp.task('html', function (){
    gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath)) // 发布到成产环境
    .pipe($.connect.reload());
})

gulp.task('json', function (){
    gulp.src(app.srcPath + 'data/**/*.json')
    .pipe(gulp.dest(app.devPath + 'data'))
    .pipe(gulp.dest(app.prdPath + 'data')) // 发布到成产环境
    .pipe($.connect.reload());
})

gulp.task('less', function (){
    gulp.src(app.srcPath + 'style/index.less')
    .pipe($.less()) // 编译 less
    .pipe(gulp.dest( app.devPath + 'css' )) 
    .pipe($.cssmin())       // 压缩
    .pipe(gulp.dest( app.prdPath + 'css' )) // 发布到成产环境
    .pipe($.connect.reload());
})

gulp.task('js', function (){
    gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.concat('index.js')) // 合并js
    .pipe(gulp.dest(app.devPath + 'js'))
    .pipe($.uglify()) // js 压缩
    .pipe(gulp.dest(app.prdPath + 'js')) // 发布到成产环境
    .pipe($.connect.reload());
})

gulp.task('image', function (){
    gulp.src(app.srcPath + 'image/**/*')
    .pipe(gulp.dest(app.devPath + 'image'))
    .pipe($.imagemin()) // 图片压缩
    .pipe(gulp.dest(app.prdPath + 'image'))
    .pipe($.connect.reload());
})

gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

// 创建服务器
gulp.task('server', function (){
    $.connect.server({
        root : [app.devPath],
        livereload : true,
        port : 3000
    })

    // 打开浏览器
    open('http://localhost:3000');

    // 
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'image/**/*', ['image']);

})

// 清除目录
gulp.task('clean', function (){
    gulp.src([app.devPath, app.prdPath])
    .pipe($.clean())
})

// 定义默认命令
gulp.task('default', ['server']);