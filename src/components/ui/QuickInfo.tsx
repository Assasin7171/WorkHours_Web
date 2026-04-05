interface QuickInfoProps {
    when: string,
    time: number,
    performance?: number,
}

export const QuickInfo = ({when, time, performance}: QuickInfoProps) => {
    return (
        <div className="">
            <div className="bg-surface-low flex flex-col text-text-primary gap-4 p-6 rounded-2xl">
                <h5 className="uppercase text-md ">{when}</h5>
                <span className="font-bold text-3xl">{time}h</span>
                <span className="text-primary font-medium">+{performance}% vs wczoraj</span>
            </div>
        </div>
    )
}