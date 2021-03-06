function HeaderIcon({Icon, label, ...rest}) {
    return (
        <div className="group flex flex-col cursor-pointer" {...rest}>
            <Icon className="h-6 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 font-bold">{label}</p>
        </div>
    )
}

export default HeaderIcon
