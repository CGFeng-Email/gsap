// 第一屏
ScrollTrigger.create({
    // 触发器元素
    trigger: '.section1',
    // 滚动器起始滚动位置
    start: 'top top',
    // 滚动器结束滚动位置
    end: '+=1080',
    // 动画进度直接连接到滚动器
    scrub: true,
    // 与滚动器关联的时间线动画
    // animation: gsap.fromTo('.screen1_content', { scale: 1 }, { scale: 0.8 })
    // 使用timeline时间线的方式
    // 第一屏图片由大变小
    animation: gsap.timeline().fromTo('.screen1_content', { scale: 1 }, { scale: 0.8 })
        // 第二屏视频由小变大，并且与第一屏同时执行
        .fromTo('.screen2_content', { width: '50%', height: '50vh' }, { width: '100%', height: '100vh' }, '<')
})

// 第二屏
ScrollTrigger.create({
    trigger: '.section2',
    start: 'top top',
    end: '+=2080',
    scrub: true,
    // 固定当前元素在屏幕中间
    pin: true,
    // onUpdate滚动位置更改会调用
    // 滚动滚动条的时候，自动播放视频
    // 滚动播放的进度和滚动条距离链接在一起
    onUpdate(self) {
        // self.progress 滚动的整体进度是0~1
        console.log('self', self.progress);
        try {
            // 获取视频元素
            const video_duration = document.querySelector('.video');

            // 实现视频的播放进度随着滚动条变化
            // video_duration.currentTime: 视频的当前播放时间
            // video_duration.duration: 视频的总时长
            video_duration.currentTime = self.progress * video_duration.duration
        } catch (error) {
            console.log('error', error);
        }
    },
    // 实现字体的滚动出现
    animation: gsap.timeline().to('.text1', { top: '20%', opacity: 1 })
        .to('.text1', { top: 0, opacity: 0 })
        .to('.text2', { top: '50%', opacity: 1 })
        .to('.text2', { top: '10%', opacity: 0 })
})

// 第三屏
ScrollTrigger.create({
    trigger: '.section3',
    top: 'top top',
    end: '+=1080',
    pin: true,
})

ScrollTrigger.create({
    trigger: '.screen3_content',
    start: 'top-=540 top', // 开始滚动器的位置是 上一屏一半距离时，我就开始动画
    end: '+=2400',
    scrub: true,
    animation: gsap.timeline()
        // 开始从右到左进入
        .fromTo('.img1', { left: '100vw', scale: 2, opacity: 0 }, { left: '50vw', scale: 1, opacity: 1 }, '<')
        .fromTo('.img2', { left: '120vw', scale: 2.2 }, { left: '60vw', scale: 1.2 }, '<')
        .fromTo('.img3', { left: '140vw', scale: 2.4 }, { left: '70vw', scale: 1.4 }, '<')
        .fromTo('.img4', { left: '160vw', scale: 2.6 }, { left: '80vw', scale: 1.6 }, '<')
        .fromTo('.img5', { left: '180vw', scale: 2.8 }, { left: '90vw', scale: 1.8 }, '<')
        // 开始从中间到左出去,这里的第一个使用>是等待上面的执行完，再开始执行出去
        .fromTo('.img1', { left: '50vw', opacity: 1 }, { left: '-180vw', opacity: 2 }, '>')
        .fromTo('.img2', { left: '60vw', scale: 1.2 }, { left: '-160vw', scale: 2.2 }, '<')
        .fromTo('.img3', { left: '70vw', scale: 1.4 }, { left: '-140vw', scale: 2.4 }, '<')
        .fromTo('.img4', { left: '80vw', scale: 1.6 }, { left: '-120vw', scale: 2.6 }, '<')
        .fromTo('.img5', { left: '90vw', scale: 1.8 }, { left: '-100vw', scale: 2.8 }, '<')
})

// 第四屏
ScrollTrigger.create({
    trigger: '.section4',
    top: 'top top',
    end: '+=2080',
    pin: true,
})

ScrollTrigger.create({
    trigger: '.section4_content',
    start: 'top top',
    end: '+=2080',
    scrub: true,
    animation: gsap.timeline()
        // 先执行标题动画
        .fromTo('.page1_title', { opacity: 1, top: '70%' }, { opacity: 0, top: '50%' })
        // 视频升上来
        .fromTo('.page1_video', { 'margin-top': '150%' }, {
            'margin-top': '0', onComplete() {
                const page1_video = document.querySelector('.page1_video');
                page1_video.duration = 0; // 从0开始播放
                page1_video.play(); // 播放
            }
        })
        .fromTo('.page1_lead', { opacity: 0 }, { opacity: 1 })
        .fromTo('.page1_video', { 'top': '100%' }, { 'top': '20%' })
        // 等上一个动画执行完后，再执行 >
        .fromTo('.page1', { left: 0 }, { left: '-100%' }, '>')
        // 与上个动画同时执行 < 
        .fromTo('.page2', { left: '100%' }, {
            left: 0, onStart() {
                const page2_video = document.querySelector('.page2_video');
                page2_video.duration = 0; // 从0开始播放
                page2_video.play(); // 播放
            }
        }, '<')
        .fromTo('.page2_title', { opacity: 0 }, { opacity: 1 })
        .fromTo('.page2_lead', { opacity: 0 }, { opacity: 1 })
})


// 第五屏
ScrollTrigger.create({
    trigger: '.section5',
    top: 'top top',
    end: '+=3200',
    pin: true,
})

ScrollTrigger.create({
    trigger: '.section5_content',
    start: 'top top',
    end: '+=3200',
    scrub: true,
    animation: gsap.timeline()
        .fromTo('.section5_title', { opacity: 1 }, { opacity: 0 })
        .fromTo('.adv', { opacity: 0 }, { opacity: 1 }, '<')
        // .fromTo('.adv_cover1', { top: '100%', scale: 1 }, { top: '0%', scale: 1.1 })
        .fromTo('.adv_cover2', { top: '110%', scale: 1 }, { top: '10%', scale: 1.1 }, '>')
        .fromTo('.adv_cover3', { top: '110%', scale: 1 }, { top: '20%', scale: 1.15 }, '>')
        .fromTo('.adv_cover4', { top: '110%', scale: 1 }, { top: '30%', scale: 1.2 }, '>')
})