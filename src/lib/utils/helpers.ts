import PrismicDOM from 'prismic-dom'
const Elements = PrismicDOM.RichText.Elements

const HtmlSerializer = function (type, element, content, children) {
  switch (type) {
    case Elements.paragraph:
      return `<p style='padding: 4px 0px;'>${children.join('')}<p/>`

    case Elements.hyperlink:
      return `<a href=${element.data.url} target=${
        element.data.target ? element.data.target : ''
      }      rel=${element.data.target ? 'noreferrer' : ''}
      class="link no-padding" style="border-color: white;">${children.join(
        ''
      )}<a/>`

    default:
      return null
  }
}

const linkResolver = (document) => '/' + document.data.uid

export const SerializedPrismicDOM = (element) => {
  return PrismicDOM.RichText.asHtml(element, linkResolver, HtmlSerializer)
}
