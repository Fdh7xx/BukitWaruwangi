type listTiketProps = {
    "name" : string
    "price" : string
    className? : string
}

const ListTiket = (props : listTiketProps) =>{
    return (
        <div className= {` ${props.className} flex justify-between py-3  border-(--border) text-(--muted-foreground)`}>
            <p>{props.name}</p>
            <p className="text-(--foreground) font-semibold">RP {props.price}</p>
        </div>
    )
}

export default ListTiket