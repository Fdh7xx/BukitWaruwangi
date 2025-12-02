type listHourProps = {
    category: string;
    day: string;
    hours : string;
    className?: string;
};

const ListHour = (props: listHourProps) => {
    return (
        <div
            className={` ${props.className} flex flex-col gap-3 py-3 border-(--border) text-(--muted-foreground)`}>
                <p className="text-(--foreground) font-semibold">{props.category}</p>
                <div className="">
                <p className="text-(--muted-foreground)">{props.day}</p>
                <p className="text-(--primary) font-semibold text-lg">{props.hours} WIB</p>
                </div>
        </div>
    );
};

export default ListHour;
