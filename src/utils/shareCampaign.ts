export async function shareCampaign(
  title: string,
  text: string,
  url: string,
): Promise<string> {
  if (navigator.share) {
    await navigator.share({ title, text, url })
    return ''
  }
  await navigator.clipboard.writeText(url)
  return 'Link copied to clipboard.'
}
