import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Privacy Policy — Clip Flow',
  description: 'Privacy Policy for Clip Flow: how we collect, use, and protect your data.',
}

export default async function PrivacyPage() {
  const locale = await getLocale()
  const isVI = locale === 'vi'
  const backHref = `/${locale}`
  const termsHref = `/${locale}/terms`

  return (
    <div className="px-4 md:px-6 pb-16 md:pb-24" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <article className="prose-legal mx-auto">
        <Link href={backHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b6b71', fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2rem' }}>
          ← {isVI ? 'Về trang chủ' : 'Back to home'}
        </Link>

        <h1>{isVI ? 'Chính sách bảo mật' : 'Privacy Policy'}</h1>
        <p className="meta">
          {isVI ? 'Cập nhật lần cuối: 06/04/2026' : 'Last updated: April 6, 2026'}
          &nbsp;·&nbsp; Kien Dao / Clip Flow
        </p>

        {isVI ? (
          <>
            <h2>1. Giới thiệu</h2>
            <p>
              Clip Flow (&ldquo;Dịch vụ&rdquo;, &ldquo;chúng tôi&rdquo;) là ứng dụng web self-hosted cho phép
              content creator upload, lên lịch và quản lý video đăng lên một hoặc nhiều tài khoản TikTok thông qua
              TikTok Content Posting API chính thức. Ứng dụng hỗ trợ xử lý video (cắt, chia segment, chuyển đổi định
              dạng 9:16 dọc), quản lý caption và hashtag, và lên lịch đăng bài đa tài khoản.
            </p>
            <p>
              Chính sách bảo mật này giải thích thông tin nào được thu thập khi bạn chạy và sử dụng Clip Flow,
              cách thông tin đó được sử dụng, thời gian lưu trữ và quyền của bạn đối với thông tin đó. Vì
              Clip Flow là self-hosted, &ldquo;người vận hành&rdquo; của bất kỳ instance nào là người đã triển
              khai nó (thường là bạn hoặc tổ chức của bạn).
            </p>
            <p>
              Khi kết nối tài khoản TikTok của bạn thông qua luồng OAuth 2.0, bạn đồng ý cho phép Clip Flow
              truy cập và sử dụng dữ liệu tài khoản TikTok của bạn như được mô tả trong chính sách này. Nếu không
              đồng ý, vui lòng ngừng sử dụng Dịch vụ.
            </p>

            <h2>2. Dữ liệu chúng tôi thu thập</h2>
            <p>
              Clip Flow lưu trữ dữ liệu cục bộ trong cơ sở dữ liệu SQLite trên server nơi nó được triển khai.
              Không có dữ liệu nào được gửi đến dịch vụ phân tích hay quảng cáo của bên thứ ba.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Loại dữ liệu</th>
                  <th>Nội dung lưu trữ</th>
                  <th>Lý do</th>
                  <th>Thời gian lưu mặc định</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Job xử lý video</td>
                  <td>Đường dẫn file upload, trạng thái xử lý, danh sách segment, thời lượng</td>
                  <td>Theo dõi tiến trình xử lý</td>
                  <td>Đến khi người dùng xóa</td>
                </tr>
                <tr>
                  <td>Token OAuth TikTok</td>
                  <td>Access token (mã hóa AES-256-GCM), refresh token (mã hóa), thời hạn, TikTok open_id, tên hiển thị, URL avatar</td>
                  <td>Thực hiện API call đến TikTok thay mặt bạn</td>
                  <td>Đến khi ngắt kết nối tài khoản</td>
                </tr>
                <tr>
                  <td>Lịch sử upload</td>
                  <td>Đường dẫn file segment, trạng thái upload, TikTok video ID, URL chia sẻ, trạng thái theo tài khoản, thông báo lỗi</td>
                  <td>Hiển thị lịch sử và cho phép thử lại</td>
                  <td>Đến khi job bị xóa</td>
                </tr>
                <tr>
                  <td>Metadata series &amp; tập</td>
                  <td>Tên series, mô tả, đường dẫn folder, số tập</td>
                  <td>Tổ chức nội dung theo series và tập</td>
                  <td>Đến khi series bị xóa</td>
                </tr>
                <tr>
                  <td>Cài đặt ứng dụng</td>
                  <td>Thời lượng segment mặc định, các giá trị cấu hình khác</td>
                  <td>Lưu tùy chỉnh người dùng</td>
                  <td>Đến khi thay đổi</td>
                </tr>
                <tr>
                  <td>Log server</td>
                  <td>Phương thức HTTP, đường dẫn, mã trạng thái, thời gian phản hồi, địa chỉ IP</td>
                  <td>Gỡ lỗi vận hành</td>
                  <td>Không lưu vào ổ đĩa theo mặc định (chỉ stdout)</td>
                </tr>
              </tbody>
            </table>

            <p>
              Clip Flow <strong>không</strong> thu thập tên hoặc địa chỉ email do người dùng trực tiếp nhập vào,
              cũng không thu thập mật khẩu, thông tin thanh toán, dấu vân tay thiết bị hay bất kỳ phân tích hành vi
              nào. Tên hiển thị và URL avatar TikTok trong bảng trên có nguồn gốc từ phản hồi OAuth của TikTok và
              chỉ được lưu để xác định tài khoản TikTok nào đang được kết nối.
            </p>

            <h2>3. Cách chúng tôi sử dụng dữ liệu</h2>
            <ol>
              <li><strong>Job xử lý video</strong> — Bản ghi job được dùng để hiển thị trạng thái trên dashboard và xác định vị trí file đã xử lý để upload.</li>
              <li><strong>Token OAuth TikTok</strong> — Access token chỉ được giải mã tại thời điểm thực hiện API call đến TikTok. Token văn bản thuần chỉ tồn tại trong bộ nhớ và không bao giờ được ghi vào log.</li>
              <li><strong>Lịch sử upload</strong> — Lưu trữ để bạn xem các segment đã đăng, thử lại upload thất bại và theo dõi trạng thái theo tài khoản.</li>
              <li><strong>Metadata series</strong> — Lưu trữ để bạn tổ chức và điều hướng nội dung theo series và tập.</li>
              <li><strong>Log server</strong> — Chỉ dùng để chẩn đoán sự cố kỹ thuật. Không chia sẻ với bên thứ ba.</li>
            </ol>

            <h2>4. Dịch vụ bên thứ ba</h2>
            <h3>TikTok Content Posting API</h3>
            <p>
              Khi bạn khởi tạo upload hoặc đăng bài, Clip Flow gửi file video và metadata đến máy chủ TikTok thông qua
              các endpoint chính thức của TikTok Content Posting API (bao gồm các luồng upload/inbox hoặc direct post,
              tùy cấu hình app). TikTok sẽ xử lý và lưu trữ video theo{' '}
              <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Chính sách bảo mật
              </a>{' '}
              riêng của họ.
            </p>

            <h3>Quyền TikTok API được yêu cầu</h3>
            <p>Clip Flow chỉ yêu cầu các scope cần thiết cho tính năng bạn bật trong TikTok app:</p>
            <ul>
              <li><code>user.info.basic</code> — lấy tên hiển thị, avatar và open_id để xác định tài khoản đã kết nối</li>
              <li><code>video.upload</code> — dùng cho luồng upload video chính thức lên TikTok</li>
              <li><code>video.publish</code> — chỉ dùng khi bạn bật và được duyệt luồng direct post</li>
            </ul>
            <p>Không có scope TikTok API nào khác được yêu cầu hoặc sử dụng ngoài các scope đã được cấu hình và duyệt.</p>

            <h3>Không có dịch vụ bên thứ ba nào khác</h3>
            <p>
              Clip Flow không sử dụng Google Analytics, Mixpanel, Sentry hay bất kỳ dịch vụ telemetry, theo dõi
              lỗi hay phân tích của bên thứ ba nào. Tất cả dữ liệu ở lại trên server của bạn.
            </p>

            <h2>5. Bảo mật</h2>
            <ul>
              <li><strong>Mã hóa AES-256-GCM</strong> — Token OAuth truy cập và làm mới TikTok được mã hóa trước khi ghi vào cơ sở dữ liệu.</li>
              <li><strong>Không log token</strong> — Token văn bản thuần không bao giờ được ghi vào log hay HTTP response.</li>
              <li><strong>Khuyến nghị HTTPS</strong> — Triển khai Clip Flow đằng sau reverse proxy với chứng chỉ TLS hợp lệ.</li>
              <li><strong>Bảo vệ CSRF</strong> — Luồng OAuth TikTok sử dụng state token có ký (HMAC-SHA256) để ngăn chặn tấn công CSRF.</li>
            </ul>

            <h2>6. Quyền &amp; kiểm soát dữ liệu</h2>
            <h3>Ngắt kết nối tài khoản TikTok</h3>
            <ol>
              <li>Mở Clip Flow và điều hướng đến <strong>Cài đặt → Tài khoản TikTok</strong>.</li>
              <li>Nhấp <strong>Ngắt kết nối</strong> bên cạnh tài khoản muốn xóa.</li>
              <li>Thao tác này xóa vĩnh viễn các token OAuth đã mã hóa cho tài khoản đó khỏi cơ sở dữ liệu.</li>
              <li>Để thu hồi quyền của TikTok, truy cập <a href="https://www.tiktok.com/settings/connected-apps" target="_blank" rel="noopener noreferrer">tiktok.com/settings/connected-apps</a>.</li>
            </ol>

            <h3>Yêu cầu xóa dữ liệu qua email</h3>
            <p>
              Nếu bạn không có quyền truy cập vào server, bạn có thể gửi email đến{' '}
              <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a> với tiêu đề
              &ldquo;Yêu cầu xóa dữ liệu&rdquo; và tên người dùng TikTok của bạn. Chúng tôi sẽ xóa toàn bộ token
              OAuth và lịch sử upload liên quan trong vòng 30 ngày.
            </p>

            <h3>Xóa toàn bộ dữ liệu (quyền truy cập server)</h3>
            <p>
              Dừng server Clip Flow, sau đó xóa thư mục <code>storage/</code> và file cơ sở dữ liệu SQLite{' '}
              (<code>storage/tiktok_uploader.db</code>). Thao tác này xóa vĩnh viễn toàn bộ dữ liệu.
            </p>

            <h2>7. Quyền riêng tư của trẻ em</h2>
            <p>
              Clip Flow không hướng đến hoặc có ý định sử dụng bởi người dưới 18 tuổi. Chúng tôi không cố tình
              thu thập dữ liệu cá nhân từ trẻ vị thành niên.
            </p>

            <h2>8. Thay đổi chính sách</h2>
            <p>
              Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Ngày &ldquo;Cập nhật lần cuối&rdquo;
              ở đầu trang sẽ được điều chỉnh tương ứng. Tiếp tục sử dụng Dịch vụ sau khi thay đổi được đăng tải
              đồng nghĩa với việc bạn chấp nhận chính sách đã sửa đổi.
            </p>

            <h2>9. Liên hệ</h2>
            <ul>
              <li><strong>Tên:</strong> Kien Dao</li>
              <li><strong>Email:</strong> <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a></li>
              <li><strong>Website:</strong> <a href="https://tiktok.kiendaotac.com" target="_blank" rel="noopener noreferrer">tiktok.kiendaotac.com</a></li>
            </ul>
          </>
        ) : (
          <>
            <h2>1. Introduction</h2>
            <p>
              Clip Flow (&ldquo;the Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a self-hosted web application
              that allows content creators to upload, schedule, and manage video posts on one or more TikTok accounts
              through the official TikTok Content Posting API. It supports video processing (trimming, splitting into
              segments, portrait conversion), caption and hashtag management, and multi-account scheduling.
            </p>
            <p>
              This Privacy Policy explains what information is collected when you run and use Clip Flow,
              how that information is used, how long it is retained, and your rights with respect to it.
              Because Clip Flow is self-hosted, the &ldquo;operator&rdquo; of any given instance is the person
              who deployed it (typically yourself or your organisation).
            </p>
            <p>
              By connecting your TikTok account via the OAuth 2.0 authorisation flow, you explicitly grant
              Clip Flow permission to access and use your TikTok account data as described in this policy.
              If you do not agree, please discontinue use of the Service.
            </p>

            <h2>2. Data We Collect</h2>
            <p>
              Clip Flow stores data locally in a SQLite database on the server where it is deployed.
              No data is sent to third-party analytics or advertising services.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>What is stored</th>
                  <th>Why</th>
                  <th>Default retention</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Video processing jobs</td>
                  <td>Uploaded file path, processing status, segment list, duration</td>
                  <td>To track processing progress</td>
                  <td>Until deleted by user</td>
                </tr>
                <tr>
                  <td>TikTok OAuth tokens</td>
                  <td>Access token (AES-256-GCM encrypted), refresh token (encrypted), token expiry, TikTok open_id, display name, avatar URL</td>
                  <td>To make authenticated API calls to TikTok on your behalf</td>
                  <td>Until account is disconnected</td>
                </tr>
                <tr>
                  <td>Upload records</td>
                  <td>Segment file path, upload status, TikTok video ID, share URL, per-account upload status, error messages</td>
                  <td>To show upload history and allow retries</td>
                  <td>Until job is deleted</td>
                </tr>
                <tr>
                  <td>Series &amp; episode metadata</td>
                  <td>Series name, description, folder path, episode numbers</td>
                  <td>To organise content by series and episode</td>
                  <td>Until series is deleted</td>
                </tr>
                <tr>
                  <td>App settings</td>
                  <td>Default segment duration, other configuration values</td>
                  <td>To persist user preferences</td>
                  <td>Until changed</td>
                </tr>
                <tr>
                  <td>Server logs</td>
                  <td>HTTP method, path, status code, response time, IP address</td>
                  <td>Operational debugging</td>
                  <td>Not persisted to disk by default (stdout only)</td>
                </tr>
              </tbody>
            </table>

            <p>
              Clip Flow does <strong>not</strong> collect names or email addresses directly entered by users,
              nor passwords, payment information, device fingerprints, or any behavioural analytics. TikTok
              display names and avatar URLs listed above originate from TikTok&rsquo;s OAuth authorisation
              response and are stored solely to identify which TikTok account is connected.
            </p>

            <h2>3. How We Use Your Data</h2>
            <ol>
              <li><strong>Video processing jobs</strong> — Job records are used to display current status in the dashboard and to locate processed files for upload.</li>
              <li><strong>TikTok OAuth tokens</strong> — Access tokens are decrypted only at the moment an API call to TikTok is made. The plaintext token exists in memory only for the duration of the API call and is never written to log files.</li>
              <li><strong>Upload records</strong> — Stored so you can see which segments have been published, retry failed uploads, and track per-account status.</li>
              <li><strong>Series metadata</strong> — Stored to allow you to organise and navigate your content by series and episode.</li>
              <li><strong>Server logs</strong> — Used only for diagnosing technical issues. Not shared with any third party.</li>
            </ol>

            <h2>4. Third-Party Services</h2>
            <h3>TikTok Content Posting API</h3>
            <p>
              When you start an upload or publishing action, Clip Flow sends your video file and metadata to TikTok
              through official TikTok Content Posting API endpoints (including upload/inbox and direct-post flows,
              depending on your app configuration). TikTok will process and store the video according to their own{' '}
              <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>.
            </p>

            <h3>TikTok API Permissions Requested</h3>
            <p>Clip Flow requests only the scopes required by the features enabled in your TikTok app:</p>
            <ul>
              <li><code>user.info.basic</code> — to retrieve display name, avatar, and open_id for connected account identification</li>
              <li><code>video.upload</code> — used for the official video upload flow</li>
              <li><code>video.publish</code> — used only when direct posting is enabled and approved</li>
            </ul>
            <p>No other TikTok API scopes are requested or used beyond approved and configured scopes.</p>

            <h3>No other third-party services</h3>
            <p>
              Clip Flow does not use Google Analytics, Mixpanel, Sentry, or any other third-party telemetry,
              error tracking, or analytics service. All data stays on your server.
            </p>

            <h2>5. Security</h2>
            <ul>
              <li><strong>AES-256-GCM encryption</strong> — TikTok OAuth access and refresh tokens are encrypted before being written to the database.</li>
              <li><strong>No token logging</strong> — Plaintext tokens are never written to log files or HTTP responses.</li>
              <li><strong>HTTPS recommended</strong> — Deploy Clip Flow behind a reverse proxy with a valid TLS certificate.</li>
              <li><strong>CSRF protection</strong> — The TikTok OAuth flow uses a signed state token (HMAC-SHA256) to prevent CSRF attacks.</li>
            </ul>

            <h2>6. Your Rights &amp; Data Control</h2>
            <h3>Disconnect a TikTok account</h3>
            <ol>
              <li>Open Clip Flow and navigate to <strong>Settings → TikTok Accounts</strong>.</li>
              <li>Click <strong>Disconnect</strong> next to the account you wish to remove.</li>
              <li>This permanently deletes the encrypted OAuth tokens for that account from the database.</li>
              <li>To also revoke TikTok&rsquo;s permission, visit <a href="https://www.tiktok.com/settings/connected-apps" target="_blank" rel="noopener noreferrer">tiktok.com/settings/connected-apps</a>.</li>
            </ol>

            <h3>Request data deletion by email</h3>
            <p>
              If you do not have access to the server, you may email{' '}
              <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a> with the subject
              &ldquo;Data Deletion Request&rdquo; and your TikTok username. We will delete all associated
              OAuth tokens and upload records within 30 days.
            </p>

            <h3>Delete all data (server access)</h3>
            <p>
              Stop the Clip Flow server, then delete the <code>storage/</code> directory and the SQLite database file
              (<code>storage/tiktok_uploader.db</code>). This irreversibly removes all data.
            </p>

            <h2>7. Children&rsquo;s Privacy</h2>
            <p>
              Clip Flow is not directed at or intended for use by individuals under the age of 18. We do not
              knowingly collect personal data from minors.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this
              page will be revised accordingly. Continued use of the Service after changes are posted constitutes
              your acceptance of the revised policy.
            </p>

            <h2>9. Contact</h2>
            <ul>
              <li><strong>Name:</strong> Kien Dao</li>
              <li><strong>Email:</strong> <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a></li>
              <li><strong>Website:</strong> <a href="https://kiendaotac.com" target="_blank" rel="noopener noreferrer">kiendaotac.com</a></li>
            </ul>
          </>
        )}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e1e1e' }}>
          <Link href={termsHref} style={{ color: '#6b6b71', fontSize: '0.875rem', textDecoration: 'none' }}>
            {isVI ? 'Xem Điều khoản dịch vụ →' : 'View Terms of Service →'}
          </Link>
        </div>
      </article>
    </div>
  )
}
