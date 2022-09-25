import Link from "next/link";
import React from "react";

const btns = [
    {
        name: "pdf to image",
        img: "data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgZmlsbD0nbm9uZSc+PGRlZnMvPjxwYXRoIGZpbGw9JyNFNjdFMjInIGQ9J00wIDZhNiA2IDAgMDE2LTZoMThhNiA2IDAgMDE2IDZ2MThhNiA2IDAgMDEtNiA2SDZhNiA2IDAgMDEtNi02VjZ6Jy8+PHBhdGggZmlsbD0nI2ZmZicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTMuNjUgNy4yYS43NS43NSAwIDAwLS43NS43NVYxMkg5LjQ1YS43NS43NSAwIDAwLS43NS43NXY5LjNjMCAuNDEuMzQuNzUuNzUuNzVoNy4wNWMuNDEgMCAuNzUtLjM0Ljc1LS43NVYxOGgzLjQ1Yy40MSAwIC43NS0uMzQuNzUtLjc1di05LjNhLjc1Ljc1IDAgMDAtLjc1LS43NWgtNy4wNXptLS43NSA2LjN2My43NWMwIC40MS4zNC43NS43NS43NWgyLjF2My4zSDEwLjJ2LTcuOGgyLjd6JyBjbGlwLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz4=",
        link: "/pdf2img",
    },
    {
        name: "text to audio",
        img: "data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB3aWR0aD0nMzMnIGhlaWdodD0nMzMnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgMTUuMjM5YzAtMi41IDItNC41MjUgNC40NjktNC41MjVoMTMuMDdjMi40NjkgMCA0LjQ3IDIuMDI2IDQuNDcgNC41MjV2MTMuMjM2YzAgMi40OTktMi4wMDEgNC41MjUtNC40NyA0LjUyNUg0LjQ3QzIgMzMgMCAzMC45NzQgMCAyOC40NzVWMTUuMjM5eicgZmlsbD0nIzM0OThEQicvPjxwYXRoIGQ9J00xOC44MiAyMC4yNTJsLS4wMTQtLjAwNmE3Ljc3NyA3Ljc3NyAwIDAwLTMuMDEzLS42MDQgNy43OTIgNy43OTIgMCAwMC00LjU3NCAxLjQ3OCA3Ljc4NiA3Ljc4NiAwIDAwLTMuMjI1LS42OTZjLTEuNjMzIDAtMy4xNS41MDMtNC40MSAxLjM2NGwtLjAxMi4wMWEuMTE3LjExNyAwIDAwLS4wNDUuMDkyYzAgLjA2NS4wNTIuMTE5LjExNy4xMTlhLjExMS4xMTEgMCAwMC4wMjItLjAwM2wuMDE1LS4wMDRhNy44MTUgNy44MTUgMCAwMTIuMjgtLjM0YzIuMTA2IDAgMy45ODQuNTA1IDUuMzk3IDEuODUxbC4wMS4wMWEuMTE1LjExNSAwIDAwLjE2Ni0uMDE0bC4wNjktLjA5N2MxLjQzNi0xLjk4OCAzLjgwMy0yLjk2OCA2LjQzNy0yLjk2OGE4LjA1IDguMDUgMCAwMS43MjkuMDMzLjExOC4xMTggMCAwMC4xMTYtLjExOS4xMTcuMTE3IDAgMDAtLjA2NS0uMTA2eicgZmlsbD0nI2ZmZicvPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuMzU5IDEuNjk3aDEzLjIzYzEuNTEgMCAyLjczNSAxLjI0IDIuNzM1IDIuNzY5djEzLjM5OGMwIDEuNTMtMS4yMjQgMi43Ny0yLjczNCAyLjc3aC01LjQyMXYxLjY5Nmg1LjQyYzIuNDM2IDAgNC40MTEtMiA0LjQxMS00LjQ2NlY0LjQ2NkMzMyAyIDMxLjAyNSAwIDI4LjU5IDBIMTUuMzU5Yy0yLjQzNiAwLTQuNDEgMi00LjQxIDQuNDY2djUuMjYzaDEuNjc1VjQuNDY2YzAtMS41MyAxLjIyNC0yLjc3IDIuNzM1LTIuNzd6JyBmaWxsPScjMzQ5OERCJy8+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi42NDYgNi44NDRjMC0uNDY4LjM3NS0uODQ4LjgzOC0uODQ4aDkuMDQ5Yy40NjMgMCAuODM4LjM4LjgzOC44NDhhLjg0My44NDMgMCAwMS0uODM4Ljg0OWgtOS4wNWEuODQzLjg0MyAwIDAxLS44MzctLjg0OXonIGZpbGw9JyMzNDk4REInLz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI4LjU5IDBDMzEuMDI1IDAgMzMgMiAzMyA0LjQ2NnYxMy4zOThjMCAyLjQ2Ny0xLjk3NSA0LjQ2Ni00LjQxIDQuNDY2aC01LjQyMXYtMS42OTdoNS40MmMxLjUxIDAgMi43MzUtMS4yNCAyLjczNS0yLjc2OVY0LjQ2NmMwLTEuNTMtMS4yMjQtMi43Ny0yLjczNC0yLjc3SDE1LjM1OWMtMS41MSAwLTIuNzM1IDEuMjQtMi43MzUgMi43N3Y1LjI2M2gtMS42NzZWNC40NjZDMTAuOTQ4IDIgMTIuOTIzIDAgMTUuMzU4IDBIMjguNTl6JyBmaWxsPScjMzQ5OERCJy8+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMy4zNDkgMTEuMDNjMC0uNDY5LjI4MS0uODQ5LjYyOC0uODQ5aDIuNzY1Yy4zNDggMCAuNjI5LjM4LjYyOS44NDlzLS4yODEuODQ4LS42MjkuODQ4aC0yLjc2NWMtLjM0NyAwLS42MjgtLjM4LS42MjgtLjg0OHpNMjMuMzQ5IDE1LjIxNmMwLS40NjkuMzc1LS44NDkuODM4LS44NDloMi4zNDZjLjQ2MyAwIC44MzguMzguODM4Ljg0OWEuODQzLjg0MyAwIDAxLS44MzguODQ4aC0yLjM0NmEuODQzLjg0MyAwIDAxLS44MzgtLjg0OHonIGZpbGw9JyMzNDk4REInLz48L3N2Zz4=  ",
        link: "/txt2audio",
    },
    {
        name: "text to image",
        img: "data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgZmlsbD0nbm9uZSc+PGRlZnMvPjxwYXRoIGZpbGw9JyNFNjdFMjInIGQ9J00wIDZhNiA2IDAgMDE2LTZoMThhNiA2IDAgMDE2IDZ2MThhNiA2IDAgMDEtNiA2SDZhNiA2IDAgMDEtNi02VjZ6Jy8+PHBhdGggZmlsbD0nI2ZmZicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTAuOCAxOC41NFY5LjQ1aDguMDNsLTguMDMgOS4xem0uMjMgMi4wMWg4LjE3VjExLjNsLTguMTcgOS4yNXpNMjAuNyA5LjZ2MTEuN2MwIC40MS0uMzQuNzUtLjc1Ljc1aC05LjlhLjc1Ljc1IDAgMDEtLjc1LS43NVY4LjdjMC0uNDEuMzQtLjc1Ljc1LS43NWg5LjljLjQxIDAgLjc1LjM0Ljc1Ljc1di45eicgY2xpcC1ydWxlPSdldmVub2RkJy8+PC9zdmc+",
        link: "/txt2img",
    },
];

const Cards = () => {
    return (
        <>
            <div className="flex py-20 justify-center items-center">
                <div className="flex w-10/12">
                    {btns.map((item) => (
                        <div className="group m-4 w-1/4 bg-gray-100 rounded-lg p-5 shadow-inner cursor-pointer">
                            <div className="p-14 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-full  w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <hr className="my-4 border-gray-400" />
                            <h3 className="mt-4 text-center text-3xl text-gray-900 font-bold">
                                {item.name.charAt(0).toUpperCase() +
                                    item.name.slice(1)}
                            </h3>
                            <Link href={`${item.link}/encrypt`}>
                                <button className="mt-10 group relative flex w-full justify-center rounded-md border shadow-md shadow-gray-300 border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    Encode
                                </button>
                            </Link>
                            <Link href={`${item.link}/decrypt`}>
                                <button className="mt-10 group relative flex w-full justify-center rounded-md border shadow-md shadow-gray-300 border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    Decode
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cards;
