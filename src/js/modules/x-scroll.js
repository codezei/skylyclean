export default function () {
    // let items = gsap.utils.toArray(".js-scroll-x-section")
    // let pageWrapper = document.querySelector('.js-scroll-x-wrapper')

    // items.forEach((container, i) => {
    // let localItems = container.querySelectorAll(".js-scroll-x-item"),
    //     distance = () => {
    //         let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
    //             containerBounds = container.getBoundingClientRect();
    //         return Math.max(0, lastItemBounds.right - containerBounds.right);
    //     };
    //     gsap.to(container, {
    //         x: () => -distance(),
    //         ease: "none",
    //         scrollTrigger: {
    //         trigger: pageWrapper,
    //         start: "top top",
    //         pinnedContainer: pageWrapper,
    //         end: () => "+=" + distance(),
    //         pin: pageWrapper,
    //         scrub: true,
    //         invalidateOnRefresh: true 
    //         }
    //     })
    // });

    let wrappers = gsap.utils.toArray(".js-scroll-x-wrapper")

    wrappers.forEach((wrapper, i) => {
        let section = wrapper.querySelector('.js-scroll-x-section')
        let localItems = wrapper.querySelectorAll(".js-scroll-x-item")
        let distance = () => {
            let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
                containerBounds = section.getBoundingClientRect();
            return Math.max(0, lastItemBounds.right - containerBounds.right);
        };
        gsap.to(section, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            pinnedContainer: wrapper,
            end: () => "+=" + distance(),
            pin: wrapper,
            scrub: true,
            invalidateOnRefresh: true 
            }
        })
    });
}