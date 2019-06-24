declare namespace ElementReact {
    interface MenuItemProps extends ElementReactLibs.ComponentProps<{}> {
        index: menuIndex
        disabled?: boolean
        onClick?(index?: menuIndex, indexPath?: menuIndex[]): void
    }
}
