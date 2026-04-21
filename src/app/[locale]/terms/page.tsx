import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Terms of Service — Clip Flow',
  description: 'Terms of Service for Clip Flow: conditions of use, acceptable use policy, and limitations of liability.',
}

export default async function TermsPage() {
  const locale = await getLocale()
  const isVI = locale === 'vi'
  const backHref = `/${locale}`
  const privacyHref = `/${locale}/privacy`

  return (
    <div className="px-4 md:px-6 pb-16 md:pb-24" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <article className="prose-legal mx-auto">
        <Link href={backHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b6b71', fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2rem' }}>
          ← {isVI ? 'Về trang chủ' : 'Back to home'}
        </Link>

        <h1>{isVI ? 'Điều khoản dịch vụ' : 'Terms of Service'}</h1>
        <p className="meta">
          {isVI ? 'Cập nhật lần cuối: 06/04/2026' : 'Last updated: April 6, 2026'}
          &nbsp;·&nbsp; Kien Dao / Clip Flow
        </p>

        {isVI ? (
          <>
            <h2>1. Chấp nhận điều khoản</h2>
            <p>
              Bằng cách cài đặt, cấu hình, truy cập hoặc sử dụng Clip Flow (&ldquo;Dịch vụ&rdquo;), bạn đồng ý
              bị ràng buộc bởi các Điều khoản dịch vụ (&ldquo;Điều khoản&rdquo;) này. Nếu không đồng ý, vui lòng
              không sử dụng Dịch vụ.
            </p>
            <p>
              Các Điều khoản này tạo thành một thỏa thuận ràng buộc pháp lý giữa bạn (&ldquo;Người dùng&rdquo;)
              và Kien Dao (&ldquo;Nhà phát triển&rdquo;, &ldquo;chúng tôi&rdquo;).
            </p>
            <p>
              Bạn phải ít nhất 18 tuổi, hoặc đủ độ tuổi tối thiểu để sử dụng TikTok theo quy định pháp luật tại
              khu vực pháp lý của bạn (tùy theo điều kiện nào cao hơn), để sử dụng Dịch vụ này.
            </p>

            <h2>2. Mô tả dịch vụ</h2>
            <p>Clip Flow cung cấp các chức năng sau:</p>
            <ul>
              <li>Xử lý file video: cắt, chia thành segment, ghép audio với video, chuyển sang định dạng dọc 9:16</li>
              <li>Xác thực với TikTok qua luồng OAuth 2.0 chính thức và lưu trữ access token đã mã hóa</li>
              <li>Upload đoạn video lên TikTok sử dụng TikTok Content Posting API chính thức</li>
              <li>Lên lịch và quản lý nội dung: caption, hashtag, thời gian đăng, tổ chức series/tập</li>
              <li>Hỗ trợ upload đồng thời lên nhiều tài khoản TikTok được kết nối</li>
            </ul>
            <p>
              Clip Flow là công cụ self-hosted. Nhà phát triển không vận hành dịch vụ đám mây chia sẻ. Khi bạn
              tự triển khai instance Clip Flow, bạn là người kiểm soát dữ liệu (&ldquo;data controller&rdquo;)
              đối với toàn bộ dữ liệu lưu trữ trên instance đó. Kien Dao là tác giả của phần mềm và không có
              quyền truy cập vào dữ liệu trên instance của bạn.
            </p>

            <h2>3. Tuân thủ TikTok API</h2>
            <p>Việc sử dụng Clip Flow để upload nội dung lên TikTok phải tuân theo:</p>
            <ul>
              <li><a href="https://www.tiktok.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">Điều khoản dịch vụ TikTok</a></li>
              <li><a href="https://www.tiktok.com/community-guidelines" target="_blank" rel="noopener noreferrer">Hướng dẫn cộng đồng TikTok</a></li>
              <li><a href="https://developers.tiktok.com/doc/overview" target="_blank" rel="noopener noreferrer">Chính sách nền tảng &amp; điều khoản dành cho nhà phát triển TikTok</a></li>
            </ul>
            <p>
              Bạn hoàn toàn chịu trách nhiệm về toàn bộ nội dung upload qua Clip Flow và không được upload nội
              dung vi phạm chính sách của TikTok, bao gồm nội dung thù hận, hoạt động nguy hiểm, spam hay nội dung
              xâm phạm quyền sở hữu trí tuệ của bên thứ ba.
            </p>
            <p>
              Bạn đồng ý tuân thủ các giới hạn kỹ thuật và vận hành do TikTok áp dụng theo từng trạng thái app review
              (ví dụ giới hạn quyền riêng tư, creator cap, posting cap hoặc các giới hạn khác do TikTok cập nhật).
              Clip Flow không vượt qua hoặc lách các giới hạn này.
            </p>

            <h2>4. Chính sách sử dụng chấp nhận được</h2>
            <p>Bạn đồng ý <strong>không</strong> sử dụng Clip Flow để:</p>
            <ul>
              <li>Upload spam, nội dung tương tác giả tạo hoặc hành vi vô thực phối hợp lên TikTok</li>
              <li>Bán lại quyền truy cập Dịch vụ hoặc bán lại quota TikTok API thu được qua Clip Flow</li>
              <li>Thực hiện lạm dụng tự động, tấn công từ chối dịch vụ hoặc khai thác lỗ hổng bảo mật trong hạ tầng của TikTok</li>
              <li>Upload nội dung mô tả hoạt động bất hợp pháp, hình ảnh thân mật không đồng thuận hoặc nội dung khai thác trẻ em</li>
            </ul>

            <h2>5. Tài khoản &amp; Token OAuth</h2>
            <p>
              Clip Flow lưu trữ access token và refresh token OAuth TikTok của bạn ở dạng mã hóa. Bạn có trách
              nhiệm bảo mật server và biến môi trường <code>ENCRYPTION_KEY</code>. Bạn có thể ngắt kết nối bất kỳ
              tài khoản TikTok nào khỏi Clip Flow bất cứ lúc nào từ trang Cài đặt.
            </p>

            <h2>6. Dữ liệu &amp; Quyền riêng tư</h2>
            <p>
              Việc sử dụng Dịch vụ cũng được điều chỉnh bởi{' '}
              <Link href={privacyHref}>Chính sách bảo mật</Link> của chúng tôi, được tích hợp bằng cách tham chiếu
              vào các Điều khoản này.
            </p>

            <h2>7. Tuyên bố miễn trừ bảo hành</h2>
            <p>
              DỊCH VỤ ĐƯỢC CUNG CẤP &ldquo;NGUYÊN TRẠNG&rdquo; VÀ &ldquo;KHI CÓ SẴN&rdquo; MÀ KHÔNG CÓ BẢO HÀNH
              DƯỚI BẤT KỲ HÌNH THỨC NÀO, RÕ RÀNG HAY NGỤ Ý, BAO GỒM NHƯNG KHÔNG GIỚI HẠN CÁC BẢO HÀNH VỀ KHẢ
              NĂNG THƯƠNG MẠI, SỰ PHÙ HỢP CHO MỤC ĐÍCH CỤ THỂ VÀ KHÔNG VI PHẠM.
            </p>
            <p>
              Các dịch vụ bên thứ ba (TikTok API) có thể thay đổi, hạn chế hoặc ngừng cung cấp API của họ bất cứ
              lúc nào mà không cần thông báo. Những thay đổi đó có thể làm một số tính năng của Clip Flow không
              hoạt động mà không có lỗi của Nhà phát triển.
            </p>

            <h2>8. Giới hạn trách nhiệm</h2>
            <p>
              TRONG PHẠM VI TỐI ĐA ĐƯỢC PHÁP LUẬT HIỆN HÀNH CHO PHÉP, TRONG MỌI TRƯỜNG HỢP NHÀ PHÁT TRIỂN SẼ
              KHÔNG CHỊU TRÁCH NHIỆM VỀ CÁC THIỆT HẠI GIÁN TIẾP, NGẪU NHIÊN, ĐẶC BIỆT, HỆ QUẢ HOẶC TRỪNG PHẠT,
              BAO GỒM MẤT LỢI NHUẬN, MẤT DỮ LIỆU HOẶC GIÁN ĐOẠN KINH DOANH.
            </p>
            <p>Nhà phát triển không chịu trách nhiệm về:</p>
            <ul>
              <li>Tài khoản TikTok bị đình chỉ hoặc cấm do nội dung bạn upload</li>
              <li>Khiếu nại bản quyền phát sinh từ nội dung bạn upload</li>
              <li>Mất dữ liệu do lỗi hoặc cấu hình sai server</li>
              <li>Gián đoạn TikTok API</li>
            </ul>

            <h2>9. Sửa đổi điều khoản</h2>
            <p>
              Nhà phát triển có quyền sửa đổi các Điều khoản này bất cứ lúc nào. Tiếp tục sử dụng Dịch vụ sau
              khi thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận các Điều khoản đã sửa đổi.
            </p>

            <h2>10. Luật điều chỉnh</h2>
            <p>
              Các Điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam, bất kể các nguyên tắc
              xung đột pháp luật.
            </p>

            <h2>11. Liên hệ</h2>
            <ul>
              <li><strong>Tên:</strong> Kien Dao</li>
              <li><strong>Email:</strong> <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a></li>
              <li><strong>Website:</strong> <a href="https://tiktok.kiendaotac.com" target="_blank" rel="noopener noreferrer">tiktok.kiendaotac.com</a></li>
            </ul>
          </>
        ) : (
          <>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By installing, configuring, accessing, or using Clip Flow (the &ldquo;Service&rdquo;), you agree
              to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not use the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you (&ldquo;User&rdquo;) and Kien Dao
              (&ldquo;Developer&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
            </p>
            <p>
              You must be at least 18 years of age, or the minimum age required to use TikTok in your jurisdiction
              (whichever is higher), to use this Service.
            </p>

            <h2>2. Service Description</h2>
            <p>Clip Flow provides the following functionality:</p>
            <ul>
              <li>Process video files: trim, split into segments, merge audio with video, convert to 9:16 portrait format</li>
              <li>Authenticate with TikTok via the official OAuth 2.0 flow and store encrypted access tokens</li>
              <li>Upload video segments to TikTok using the official TikTok Content Posting API</li>
              <li>Schedule and manage content: captions, hashtags, publish times, series/episode organisation</li>
              <li>Support simultaneous uploads to multiple connected TikTok accounts</li>
            </ul>
            <p>
              Clip Flow is a self-hosted tool. The Developer does not operate a shared cloud service.
              When you deploy your own Clip Flow instance, you act as the data controller for all data
              stored on that instance. Kien Dao is the author of the software only and does not have access
              to data stored on your instance.
            </p>

            <h2>3. TikTok API Compliance</h2>
            <p>Your use of Clip Flow for uploading content to TikTok is subject to:</p>
            <ul>
              <li><a href="https://www.tiktok.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">TikTok Terms of Service</a></li>
              <li><a href="https://www.tiktok.com/community-guidelines" target="_blank" rel="noopener noreferrer">TikTok Community Guidelines</a></li>
              <li><a href="https://developers.tiktok.com/doc/overview" target="_blank" rel="noopener noreferrer">TikTok Platform Terms &amp; Developer Policies</a></li>
            </ul>
            <p>
              You are solely responsible for all content you upload through Clip Flow and must not upload content
              that violates TikTok&rsquo;s policies, including hateful content, dangerous activities, spam, or content
              that infringes third-party intellectual property rights.
            </p>
            <p>
              You agree to comply with TikTok technical and operational limits tied to your app review status
              (for example privacy restrictions, creator caps, posting caps, or other limits introduced by TikTok).
              Clip Flow does not bypass these limits.
            </p>

            <h2>4. Acceptable Use Policy</h2>
            <p>You agree <strong>not</strong> to use Clip Flow to:</p>
            <ul>
              <li>Upload spam, artificially inflated engagement content, or coordinated inauthentic behaviour to TikTok</li>
              <li>Re-sell access to the Service or resell TikTok API quota obtained through Clip Flow</li>
              <li>Conduct automated abuse, denial-of-service attacks, or exploit vulnerabilities in TikTok&rsquo;s infrastructure</li>
              <li>Upload content depicting illegal activities, non-consensual intimate imagery, or content that exploits minors</li>
            </ul>

            <h2>5. Accounts &amp; OAuth Tokens</h2>
            <p>
              Clip Flow stores your TikTok OAuth access and refresh tokens in encrypted form. You are responsible for
              keeping your server and the <code>ENCRYPTION_KEY</code> environment variable secure. You can disconnect
              any TikTok account from Clip Flow at any time from the Settings page.
            </p>

            <h2>6. Data &amp; Privacy</h2>
            <p>
              Your use of the Service is also governed by our{' '}
              <Link href={privacyHref}>Privacy Policy</Link>, which is incorporated
              by reference into these Terms.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              Third-party services (TikTok API) may change, restrict, or discontinue their APIs at any time
              without notice. Such changes may render parts of Clip Flow non-functional without fault on the part
              of the Developer.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING LOSS OF PROFITS, LOSS OF DATA, OR BUSINESS INTERRUPTION.
            </p>
            <p>The Developer is not responsible for:</p>
            <ul>
              <li>TikTok account suspensions or bans resulting from content you upload</li>
              <li>Copyright claims arising from content you upload</li>
              <li>Loss of data due to server failure or misconfiguration</li>
              <li>Interruptions to the TikTok API</li>
            </ul>

            <h2>9. Modifications to Terms</h2>
            <p>
              The Developer reserves the right to modify these Terms at any time. Continued use of the Service
              after changes are posted constitutes your acceptance of the modified Terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Vietnam,
              without regard to conflict of law principles.
            </p>

            <h2>11. Contact</h2>
            <ul>
              <li><strong>Name:</strong> Kien Dao</li>
              <li><strong>Email:</strong> <a href="mailto:admin@kiendaotac.com">admin@kiendaotac.com</a></li>
              <li><strong>Website:</strong> <a href="https://tiktok.kiendaotac.com" target="_blank" rel="noopener noreferrer">tiktok.kiendaotac.com</a></li>
            </ul>
          </>
        )}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e1e1e' }}>
          <Link href={privacyHref} style={{ color: '#6b6b71', fontSize: '0.875rem', textDecoration: 'none' }}>
            {isVI ? 'Xem Chính sách bảo mật →' : 'View Privacy Policy →'}
          </Link>
        </div>
      </article>
    </div>
  )
}
