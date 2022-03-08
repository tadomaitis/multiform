import * as C from './styles'

import { CgProfile as ProfileIcon } from 'react-icons/cg'
import { BsFillJournalBookmarkFill as BookIcon } from 'react-icons/bs'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { GiPartyPopper as PartyIcon } from 'react-icons/gi'

type Props = {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
  onClick?: () => void
}

export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active,
  onClick
}: Props) => {
  return (
    <C.SidebarItemContainer onClick={onClick}>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
      <C.IconArea active={active}>
        {icon === 'profile' && (
          <ProfileIcon fill='white' width={30} height={30} />
        )}
        {icon === 'book' && <BookIcon fill='white' width={30} height={30} />}
        {icon === 'mail' && <MailIcon fill='white' width={30} height={30} />}
        {icon === 'party' && <PartyIcon fill='white' width={30} height={30} />}
      </C.IconArea>
      <C.Point active={active}></C.Point>
    </C.SidebarItemContainer>
  )
}
