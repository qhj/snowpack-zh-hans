const Banner: React.FC = () => {
  return (
    <section>
      <div className="bg-banner p-2">
        <div className="text-white font-bold text-sm px-6">
          Snowpack 3.0 现已发布！
          <a
            className="underline"
            href="https://www.snowpack.dev/posts/2021-01-13-snowpack-3-0"
          >
            阅读公告 →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
