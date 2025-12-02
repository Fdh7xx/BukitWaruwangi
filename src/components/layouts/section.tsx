type SectionProps = {
    children: React.ReactNode
    className?: string
    bg?: string
}

const Section = (props : SectionProps) => {
    return(
        <section className={props.bg}>
            <div className={`${props.className} max-w-7xl mx-auto py-20 px-5 md:px-10`}>
                {props.children}
            </div>
        </section>
    )
}

export default Section;