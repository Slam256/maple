import { ComponentStory } from "@storybook/react"
import { createMeta } from "stories/utils"
import { Card } from "../../../components/Card"

export default createMeta({
  title: "Components/Cards/Card",
  figmaUrl:
    "https://www.figma.com/file/3ifz37EOwDfmnEG8320KlD/CS1---MAPLE?node-id=229%3A8338",
  component: Card
})

const StorySVG = () => {
  return (
    <div>
      <img src="Thumbs Up.svg" alt="" />
    </div>
  )
}

const Template: ComponentStory<typeof Card> = ({
  header,
  subheader,
  bodyText,
  timestamp,
  imgSrc,
  cardItems,
  inHeaderElement,
  ...rest
}) => {
  return (
    <Card
      header={header}
      subheader={subheader}
      bodyText={bodyText}
      timestamp={timestamp}
      imgSrc={imgSrc}
      cardItems={cardItems}
      inHeaderElement={inHeaderElement}
      {...rest}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  header: "Header"
}

export const HeaderAndSubheader = Template.bind({})
HeaderAndSubheader.args = {
  header: "Header",
  subheader: "Subheader"
}

export const HeaderAndSubheaderAndTimestamp = Template.bind({})
HeaderAndSubheaderAndTimestamp.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM"
}
export const HeaderAndSubheaderAndTimestampAndInHeaderElement = Template.bind(
  {}
)
HeaderAndSubheaderAndTimestampAndInHeaderElement.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM",
  inHeaderElement: <>button here</>
}

export const HeaderAndSubheaderAndTimestampAndImg = Template.bind({})
HeaderAndSubheaderAndTimestampAndImg.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png"
}

export const HeaderAndSubheaderAndTimestampAndImgAndInHeaderElement =
  Template.bind({})
HeaderAndSubheaderAndTimestampAndImgAndInHeaderElement.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png",
  inHeaderElement: <StorySVG />
}

export const HeaderAndSubheaderAndTimestampAndImgAndBody = Template.bind({})
HeaderAndSubheaderAndTimestampAndImgAndBody.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png",
  bodyText: "This is body text and it's nonsense placeholder and filler"
}

export const HeaderAndSubheaderAndTimestampAndImgAndBodyAndBodyImage =
  Template.bind({})
HeaderAndSubheaderAndTimestampAndImgAndBodyAndBodyImage.args = {
  header: "Header",
  subheader: "Subheader",
  timestamp: "3:29PM",
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png",
  bodyText: "This is body text and it's nonsense placeholder and filler",
  bodyImage:
    "https://plus.unsplash.com/premium_photo-1661315458660-6aa08c1ddf38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVnaXNsYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}

export const HeaderAndSubheaderAndBodyAndTwoListItems = Template.bind({})
HeaderAndSubheaderAndBodyAndTwoListItems.args = {
  header: "Header",
  subheader: "Subheader",
  bodyText: "This is body text and it's nonsense placeholder and filler",
  cardItems: [
    {
      billName: "H.3340",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3342",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    }
  ]
}

export const HeaderAndSubheaderAndBodyAndSixListItemsWithSeeMore =
  Template.bind({})
HeaderAndSubheaderAndBodyAndSixListItemsWithSeeMore.args = {
  header: "Header",
  subheader: "Subheader",
  bodyText: "This is body text and it's nonsense placeholder and filler",
  cardItems: [
    {
      billName: "H.3340",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3342",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3340",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3342",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3340",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    },
    {
      billName: "H.3342",
      billDescription:
        "An Act creating a green bank to promote clean energy in Massachusetts"
    }
  ]
}
