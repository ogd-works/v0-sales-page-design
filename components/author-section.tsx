export function AuthorSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/author-music-studio-teaching.jpg)" }}
        />
        <div className="absolute inset-0 bg-muted/95" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre o Autor</h2>
          </div>

          <div className="bg-card border rounded-lg p-8 md:p-12">
            <div className="space-y-6 text-pretty leading-relaxed">
              <p className="text-2xl font-bold text-center">Oi, eu sou o Tom Cykman.</p>

              <p className="text-xl text-center font-semibold">
                E há 10 anos eu estava EXATAMENTE onde você está agora...
              </p>

              <div className="space-y-3 text-muted-foreground">
                <p>Travando completamente quando outros músicos me chamavam para improvisar.</p>
                <p>Com vergonha dos meus solos previsíveis e sem personalidade.</p>
                <p>Fingindo que sabia o que estava fazendo, enquanto por dentro estava em pânico total.</p>
              </div>

              <p className="text-lg font-semibold text-foreground">Eu sei EXATAMENTE como é essa frustração.</p>

              <p className="text-muted-foreground italic">
                Lembro da vez que saí de uma jam session no meio da música porque simplesmente "deu branco". Foi
                humilhante.
              </p>

              <p className="text-xl font-bold text-center mt-8">Mas hoje...</p>

              <div className="space-y-3 bg-primary/5 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Toco em palcos internacionais (Portugal, Israel - turnê Shablul Jazz)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Fui finalista do Prêmio Profissionais da Música 2023</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Integro o grupo de Jota P - saxofonista 2x Grammy Latino ao lado de Hermeto Pascoal</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Universidades federais me convidam para ensinar improvisação (UFRGS, UFMG)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Mais de 450 alunos em 20+ países aplicam meu método</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
