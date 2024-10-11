
const Pagination = ({qtd, set, className, page}:{qtd:string, set:Function, className:string, page:string}) => {

    const pags = [];

    for (let i = 1; i <= parseInt(qtd); i++) {
        pags.push(
            <button key={i} className={`p-[15px] ${i === parseInt(page) ? `bg-pallete04` : `bg-pallete01`} rounded-[10px]`} onClick={() => set(i)}>
                <strong className="text-[18px]">{i}</strong>
            </button>
        )
    }

    return(
        <div className={className}>

            {pags.map(item => item)}

        </div>
    )
}

export default Pagination;