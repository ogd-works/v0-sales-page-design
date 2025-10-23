export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Footer Content */}
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground space-y-4">
            <p className="font-semibold text-foreground text-lg">Academia de Improvisação</p>
            <p>© 2025 Academia de Improvisação. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a href="#" className="hover:text-foreground">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-foreground">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
