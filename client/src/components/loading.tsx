export function Loading({ isFixed = false }: { isFixed?: boolean }) {
    return (
        <div
            className={`${isFixed ? "fixed inset-0" : "w-full h-full"} flex
                justify-center items-center z-100 bg-background`}
        >
            <div className="w-[32px] h-[32px] flex justify-center items-center">
                <span
                    className="w-[20px] h-[20px] inline-block rounded-full border-[3.5px] border-white/45
                        border-b-transparent animate-spin animation-duration-[0.4s]"
                />
            </div>
        </div>
    );
}
